# -*- coding: utf-8 -*-

from odoo import models, fields, api


class Question(models.Model):
	_name = 'liveexam.question'

	group_id = fields.Many2one('res.groups', string='Group')
	option_ids = fields.One2many('liveexam.option','question_id', string="Options")
	content = fields.Text(string="Content")
	title = fields.Text(string="Title")
	explanation = fields.Text(string="Explanation")
	level = fields.Selection(
		[('easy', 'Easy'), ('medium','Medium'), ('hard','Hard'),('xeasy', 'Very easy'), ('xhard','Very hard')],default='easy')
	type = fields.Selection(
		[('sc', 'Single-choice'), ('fb','Fill-the-blank'), ('ext','Open end')], required=True)

class QuestionOption(models.Model):
	_name = 'liveexam.option'

	question_id = fields.Many2one('liveexam.question', string='Question')
	content = fields.Text(string="Content")
	is_correct = fields.Boolean(string="Is correct", default=False)