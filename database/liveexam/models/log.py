# -*- coding: utf-8 -*-

from odoo import models, fields, api

class ExamLog(models.Model):
	_name = 'liveexam.exam_log'

	res_model = fields.Char('Resource Model',help="The database object this attachment will be attached to.")
	res_id = fields.Integer('Resource ID', help="The record id this is attached to.")
	start = fields.Datetime('Start time')
	note = fields.Text('Note')
	code = fields.Char('Code')
	attachment_id = fields.Many2one('ir.attachment', string="Attachment")
	attachment_url = fields.Char(related="attachment_id.url", string="Attachment URL")
	user_id = fields.Many2one('res.users', string="Target user")
	exam_id = fields.Many2one('liveexam.exam', string="Exam")