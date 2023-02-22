import frappe
from frappe.utils import time_diff_in_hours


@frappe.whitelist()
def validate_note(doc, method):
    note = ''

    for item in doc.items:

        if doc.items.index(item) == 0:
            note += f'{item.description} '
        else:
            note += f',{item.description}'
    doc.remarks = note