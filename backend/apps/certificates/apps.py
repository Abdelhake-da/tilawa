from django.apps import AppConfig


class CertificatesConfig(AppConfig):
    name = 'apps.certificates'

    def ready(self):
        from . import signals  # noqa