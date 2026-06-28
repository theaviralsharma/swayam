const VALID_TOKEN =
  "nWqSk5h7UZ3UGato0UE8spc1Vc69JudJkWOk78pVuPQuU3SbdRpkMUsj3UJCUyxD";

const PDF = "../pdf/255620112350_nou25_mg24.pdf";

// Get token from URL
const token = new URLSearchParams(window.location.search).get("q");

// Redirect if token is invalid
if (token !== VALID_TOKEN) {
    window.location.replace("https://swayam.gov.in");
    throw new Error("Invalid token");
}

// Load certificate
document.getElementById("pdfViewer").src = PDF;