# -*- coding: utf-8 -*-

from odoo import models, fields, api

class Partner(models.Model):
	_name = 'res.partner'
	_inherit = 'res.partner'

	gender = fields.Selection(
		[('male', 'Male'), ('female', 'Female'), ('other', 'Other')])


class User(models.Model):
	_name = 'res.users'
	_inherit = 'res.users'

	gender = fields.Selection(related='partner_id.gender')
	is_admin = fields.Boolean(default=False, string="Is admin")
	class_id = fields.Many2one('res.groups', string='Class')
	name = fields.Char(related="partner_id.name", string="Name")
	email = fields.Char(related="partner_id.email", string="Email")
	phone = fields.Char(related="partner_id.phone", string="Phone")
	banned = fields.Boolean(default=False, string="Is banned")
	role = fields.Selection(
		[('teacher', 'Teacher'), ('student', 'Student')])