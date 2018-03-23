"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_PASSWORD = '123456';
exports.USER_STATUS = { 'true': 'Active', 'false': 'Suspended' };
exports.GENDER = { 'male': 'Male', 'female': 'Female', 'other': 'Other' };
exports.GROUP_CATEGORY = { USER: 'organization', QUESTION: 'question', COURSE: 'course' };
exports.SERVER_DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
exports.COURSE_STATUS = { 'draft': 'Draft', 'published': 'Published', 'unpublished': 'Unpublished' };
exports.COURSE_MODE = { 'self-study': 'Self-study', 'group': 'Group-study' };
exports.COURSE_MEMBER_ROLE = { 'student': 'Student', 'teacher': 'Teacher' };
exports.COURSE_MEMBER_STATUS = { 'active': 'Active', 'withdraw': 'Withdraw', 'suspend': 'Suspended' };
exports.COURSE_MEMBER_ENROLL_STATUS = { 'in-study': 'In-study', 'complete': 'Complete', 'registered': 'Registered' };
exports.QUESTION_TYPE = { 'sc': 'Single-choice', 'fb': 'Fill-the-blank', 'ext': 'Open-ended' };
exports.DEFAULT_DATE_LOCALE = {
    firstDayOfWeek: 0,
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: 'Today',
    clear: 'Clear'
};
exports.EXAM_STATUS = { 'draft': 'Draft', 'published': 'Published', 'unpublished': 'Unpublished' };
exports.REPORT_CATEGORY = { COURSE: 'COURSE', EXAM: 'EXAM' };
exports.EXPORT_DATETIME_FORMAT = "'dd-MM-yyyy'HH:mm:ss";
exports.EXPORT_DATE_FORMAT = "'dd-MM-yyyy";
exports.EXAM_MEMBER_ROLE = { 'candidate': 'Candidate', 'supervisor': 'Supervisor' };
exports.EXAM_MEMBER_STATUS = { 'active': 'Active', 'withdraw': 'Withdraw', 'suspend': 'Suspended' };
exports.QUESTION_SELECTION = { 'manual': 'Manual', 'random': 'Random' };
exports.EXAM_MEMBER_ENROLL_STATUS = { 'in-progress': 'In-progress', 'complete': 'Complete', 'registered': 'Registered' };
exports.COURSE_UNIT_TYPE = { 'folder': 'Folder', 'exercise': 'Exercise', 'html': 'HTML Lecture', 'video': 'Video lecture' };
exports.COURSE_UNIT_ICON = { 'folder': 'ui-icon-folder', 'exercise': 'ui-icon-play-for-work', 'html': 'ui-icon-text-fields', 'video': 'ui-icon-videocam' };
exports.CONFERENCE_STATUS = { 'open': 'Open', 'closed': 'Closed' };
