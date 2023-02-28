
frappe.ui.form.on('Item', {
	refresh(frm) {
if(frm.doc.is_stock_item){

frm.add_custom_button(__("Show in work order"), function() {
				frappe.route_options = {
					production_item: frm.doc.name
				}
				frappe.set_route("list", "Work Order");
			});
}

	}
})
