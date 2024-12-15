import React from "react";
import fontkit from "@pdf-lib/fontkit";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

const PdfGenerator = () => {
  const createPdf = async () => {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    // Add a page to the document
    const page = pdfDoc.addPage([600, 400]);

    // Embed the standard font
    const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    // Set the text to be written on the page
    const text = "Hello, PDF world!";

    // Draw the text on the page
    page.drawText(text, {
      x: 50,
      y: 350,
      font,
      size: 30,
      color: rgb(0, 0, 0), // black color
    });

    // Serialize the PDF document to bytes
    const pdfBytes = await pdfDoc.save();

    // Create a download link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(
      new Blob([pdfBytes], { type: "application/pdf" })
    );
    link.download = "generated.pdf";
    link.click();
  };

  return (
    <div>
      <h1>Create a PDF</h1>
      <button onClick={createPdf}>Download PDF</button>
    </div>
  );
};

export default PdfGenerator;
