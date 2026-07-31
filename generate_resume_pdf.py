import os
import subprocess
import sys

def create_resume_pdf():
    html_path = os.path.abspath("assets/resume.html")
    pdf_path = os.path.abspath("assets/resume.pdf")
    
    edge_paths = [
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"
    ]
    
    edge_bin = None
    for path in edge_paths:
        if os.path.exists(path):
            edge_bin = path
            break
            
    if edge_bin:
        cmd = [
            edge_bin,
            "--headless",
            "--disable-gpu",
            f"--print-to-pdf={pdf_path}",
            "--no-pdf-header-footer",
            html_path
        ]
        print(f"Generating PDF via Edge Headless: {pdf_path}")
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode == 0:
            print("Successfully generated exact matching PDF resume at:", pdf_path)
            return True
        else:
            print("Edge headless PDF generation error:", result.stderr)

    print("Could not generate PDF via Edge headless.")
    return False

if __name__ == "__main__":
    create_resume_pdf()
