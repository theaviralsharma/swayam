const VALID_TOKEN =
  "nWqSk5h7UZ3UGato0UE8spc1Vc69JudJkWOk78pVuPQuU3SbdRpkMUsj3UJCUyxD";

const PDF = "../pdf/255620112350_nou25_mg24.pdf";

// Get token
const token = new URLSearchParams(window.location.search).get("q");

// Invalid token
if (token !== VALID_TOKEN) {
    window.location.replace("https://swayam.gov.in");
    throw new Error("Invalid token");
}

// Detect iPhone / iPad Safari
const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

// iPhone -> Open native PDF viewer
if (isiOS) {
    window.location.replace(PDF);
} else {
    // Desktop + Android
    document.getElementById("pdfViewer").src = PDF;
}