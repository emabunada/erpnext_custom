import frappe


def execute():
    frappe.db.sql(f"update `tabBOM` set department = 'Sales'")
