import { readdirSync } from "fs";
import { join } from "path";

// Force static generation — the certificate list is read at build time
// and will update on the next rebuild/redeploy.
export const dynamic = "force-static";

/**
 * Formats a PDF filename into a human-readable certificate name.
 *   "ccna-introToNetworks.pdf" → "CCNA — Intro to Networks"
 *   "IT_Customer_Support_Basics.pdf" → "IT Customer Support Basics"
 *   "IntroToModernAi.pdf" → "Intro to Modern AI"
 */
function formatCertificateName(filename: string): string {
  // Strip .pdf extension
  let name = filename.replace(/\.pdf$/i, "");

  // Replace underscores and hyphens with a separator marker
  // Handle "ccna-introToNetworks" → split on hyphen first
  const segments = name.split(/[-]/);

  const formattedSegments = segments.map((segment) => {
    // Replace underscores with spaces
    let s = segment.replace(/_/g, " ");

    // Insert a space before each uppercase letter that follows a lowercase letter
    // "introToNetworks" → "intro To Networks"
    s = s.replace(/([a-z])([A-Z])/g, "$1 $2");

    // Insert a space before each uppercase letter that is followed by a lowercase letter
    // and preceded by another uppercase letter: "HTMLParser" → "HTML Parser"
    s = s.replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");

    // Capitalize first letter of each word
    s = s
      .split(" ")
      .map((word) => {
        // Handle common acronyms
        const upper = word.toUpperCase();
        if (["CCNA", "IT", "AI", "CSS", "HTML", "SQL", "AWS", "GCP", "API"].includes(upper)) {
          return upper;
        }
        // Handle lowercase prepositions / articles (keep lowercase unless first word)
        const lower = word.toLowerCase();
        if (["to", "the", "a", "an", "of", "in", "for", "and", "or", "on", "at", "by"].includes(lower)) {
          return lower;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    // Ensure the first character of the segment is uppercase
    if (s.length > 0) {
      s = s.charAt(0).toUpperCase() + s.slice(1);
    }

    return s;
  });

  // Join segments with " — " if there are multiple (e.g., "CCNA — Intro to Networks")
  return formattedSegments.join(" — ");
}

export async function GET() {
  try {
    const certsDir = join(process.cwd(), "public", "certificates");

    const files = readdirSync(certsDir);

    const certificates = files
      .filter((file) => file.toLowerCase().endsWith(".pdf"))
      .sort((a, b) => a.localeCompare(b))
      .map((filename) => ({
        filename,
        name: formatCertificateName(filename),
        url: `/certificates/${filename}`,
      }));

    return Response.json({ certificates });
  } catch (error) {
    console.error("Failed to read certificates directory:", error);
    return Response.json({ certificates: [], error: "Failed to load certificates" }, { status: 500 });
  }
}
