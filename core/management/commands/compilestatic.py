import subprocess

from django.core import management
from django.core.management.base import BaseCommand, CommandError


class Command(BaseCommand):
    help = 'Compiling and collecting static and js files'

    def handle(self, **options):
            try:
                subprocess.run('cd frontend && npm run build',shell=True)
                subprocess.run('rm -rf static', shell=True)
                self.stdout.write(self.style.SUCCESS("Cleared stale static directory"))
                management.call_command('collectstatic', verbosity=1, interactive=True)
                # management.call_command('runserver', verbosity=0)
            except CommandError as e:
                raise CommandError('something wrong happened %'%e)
            self.stdout.write(self.style.SUCCESS("Compiled Successfully"))