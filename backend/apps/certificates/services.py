from django.template.loader import render_to_string
from weasyprint import HTML
from django.http import HttpResponse


def generate_certificate_pdf(certificate):
    html_content = render_to_string("certificates/certificate_template.html", {
        "certificate": certificate,
        "student": certificate.student,
    })
    pdf_file = HTML(string=html_content).write_pdf()
    response = HttpResponse(pdf_file, content_type="application/pdf")
    response["Content-Disposition"] = f'attachment; filename="certificate_{certificate.id}.pdf"'
    return response