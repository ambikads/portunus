import re

from django.core.exceptions import ValidationError
from django.utils.translation import gettext as _


has_alphabetic = re.compile(r"[a-zA-Z]")
has_numeric = re.compile(r"[\d]")


class AlphaNumericPasswordValidator:
    def validate(self, password, user=None):
        if not has_alphabetic.search(password):
            raise ValidationError(
                _("This password must contain at least one alphabetic character!")
            )
        if not has_numeric.search(password):
            raise ValidationError(
                _("This password must contain at least one numeric character!")
            )

    def get_help_text(self):
        return _(
            "Your password must contain at least 1 numeric character and 1 alphabetic "
            "character"
        )
