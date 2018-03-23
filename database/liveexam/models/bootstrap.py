from odoo import models, fields, api,tools
from odoo.osv import osv


class Bootstrap(osv.AbstractModel):
    _name = 'liveexam.bootstrap'

    @api.model
    def install(self):
    	pass

class Company(models.Model):
	_name = 'res.company'
	_inherit = 'res.company'

	@api.model
	def defaultCompany(self):
		company = self.env.ref("base.main_company")
		return company.read()