# -*- coding: utf-8 -*-

from odoo import models, fields, api

class Exam(models.Model):
	_name = 'liveexam.exam'

	selector_id = fields.Many2one('liveexam.question_selector', string='Question selector')
	scale = fields.Integer(string='Scale')
	question_ids = fields.One2many('liveexam.exam_question','exam_id', string="Question list")
	duration = fields.Integer(string='Duration')
	max_attempt = fields.Integer(string='Max attempt', default=1)
	allow_navigate = fields.Boolean(string='Allow navigate question', default=True)
	start = fields.Datetime(string='Start time')
	end = fields.Datetime(string='End time')
	name = fields.Char(string='Name', required=True)
	summary = fields.Text(string='Summary')
	instruction = fields.Text(string='Instruction')
	grade_ids = fields.One2many('liveexam.exam_grade','exam_id', string="Grade list")
	status = fields.Selection(
		[('draft', 'Draft'), ('published', 'Published'),  ('unpublished', 'unpublished')], default="draft")
	publish_score = fields.Boolean(string="Publish score", default=False)

class ExamGrade(models.Model):
	_name = 'liveexam.exam_grade'

	exam_id = fields.Many2one('liveexam.exam', string='Exam')
	min_score = fields.Integer(string='Min score')
	max_score = fields.Integer(string='Max score')
	name = fields.Char(string='Name')


class ExamMember(models.Model):
	_name = 'liveexam.exam_member'

	exam_id = fields.Many2one('liveexam.exam', string='Exam')
	user_id = fields.Many2one('res.users', string='User')
	name = fields.Char(related='user_id.name', string='User name', readonly=True)
	login = fields.Char(related='user_id.login', string='User login', readonly=True)
	email = fields.Char(related='user_id.email', string='Email', readonly=True)
	phone = fields.Char(related='user_id.phone', string='Phone', readonly=True)
	class_id = fields.Many2one('res.groups',related='user_id.class_id', readonly=True)
	status = fields.Selection(
		[('active', 'Active'), ('withdraw', 'Withdraw'), ('suspend', 'Suspend')], default='active')
	role = fields.Selection(related="user_id.role", readonly=True)
	enroll_status = fields.Selection(
		[('in-progress', 'In-progress'), ('completed', 'Completed'), ('registered', 'Registered')], default="registered")
	date_register = fields.Datetime('Register date')

	@api.model
	def create(self, vals):
		print 'Create exam member',vals
		members = self.env['liveexam.exam_member'].search([('user_id','=',vals['user_id']),('exam_id','=',vals['exam_id'])])
		if len(members) > 0:
			m =  members[0]
		else:
			m = super(ExamMember, self).create(vals)
		return m

class QuestionSelector(models.Model):
	_name = 'liveexam.question_selector'

	number = fields.Integer(string='Number of question')
	group_id = fields.Many2one('res.groups',string="Question category")
	include_sub_group = fields.Boolean(string='Include sub-group')
	level = fields.Integer(string="Question level")
	mode = fields.Selection(
		[('random', 'Random'), ('manual', 'Manual')])

class ExamQuestion(models.Model):
	_name = 'liveexam.exam_question'

	question_id = fields.Many2one('liveexam.question',string="Question")
	exam_id = fields.Many2one('liveexam.exam', string='Exam')
	score = fields.Integer(string='Score')
	order = fields.Integer(string='Order')
	group_id = fields.Many2one('res.groups', related="question_id.group_id", string='Group', readonly=True)
	option_ids = fields.One2many('liveexam.option','question_id', related="question_id.option_ids", string="Options", readonly=True)
	content = fields.Html(string="Content",related="question_id.content", readonly=True)
	title = fields.Text(string="Title",related="question_id.title", readonly=True)
	explanation = fields.Text(string="Explanation",related="question_id.explanation", readonly=True)
	level = fields.Selection(string="Level",related="question_id.level", readonly=True)
	type = fields.Selection(
		[('sc', 'Single-choice'), ('ext','Open end')],related="question_id.type", readonly=True)


class Answer(models.Model):
	_name = 'liveexam.answer'

	question_id = fields.Many2one('liveexam.question', string='Question')
	is_correct = fields.Boolean(default=False, string="Is correct")
	option_id = fields.Many2one('liveexam.option', string='Option')
	text = fields.Text(string="Text")
	score = fields.Integer(string="Score")
	submission_id = fields.Many2one('liveexam.submission',string="Submission")


class Submission(models.Model):
	_name = 'liveexam.submission'

	member_id = fields.Many2one('liveexam.exam_member', string='Exam member')
	user_id = fields.Many2one('res.users', string='User', related="member_id.user_id", readonly=True)
	exam_id = fields.Many2one('liveexam.exam', related="member_id.exam_id", readonly=True,string='Exam')
	answer_ids = fields.One2many('liveexam.answer','submission_id', string="Submission")
	start = fields.Datetime(string='Start time')
	end = fields.Datetime(string='End time')
