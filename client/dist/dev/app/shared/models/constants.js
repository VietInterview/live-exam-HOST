"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_PASSWORD = '123456';
exports.USER_STATUS = { 'true': 'Active', 'false': 'Suspended' };
exports.GENDER = { 'male': 'Male', 'female': 'Female', 'other': 'Other' };
exports.GROUP_CATEGORY = { USER: 'organization', QUESTION: 'question' };
exports.SERVER_DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
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
exports.EXPORT_DATETIME_FORMAT = "'dd-MM-yyyy'HH:mm:ss";
exports.EXPORT_DATE_FORMAT = "'dd-MM-yyyy";
exports.EXAM_MEMBER_ROLE = { 'candidate': 'Candidate', 'supervisor': 'Supervisor' };
exports.EXAM_MEMBER_STATUS = { 'active': 'Active', 'withdraw': 'Withdraw', 'suspend': 'Suspended' };
exports.QUESTION_SELECTION = { 'manual': 'Manual', 'random': 'Random' };
exports.EXAM_MEMBER_ENROLL_STATUS = { 'in-progress': 'In-progress', 'complete': 'Complete', 'registered': 'Registered' };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO0FBQzVCLFFBQUEsV0FBVyxHQUFHLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUM7QUFDekQsUUFBQSxNQUFNLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQ2xFLFFBQUEsY0FBYyxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDLENBQUM7QUFDL0QsUUFBQSxzQkFBc0IsR0FBRyxxQkFBcUIsQ0FBQztBQUMvQyxRQUFBLGFBQWEsR0FBRyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsQ0FBQztBQUN2RixRQUFBLG1CQUFtQixHQUFHO0lBQ2xDLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQztJQUN4RixhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7SUFDaEUsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3ZELFVBQVUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO0lBQ3RJLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO0lBQ3JHLEtBQUssRUFBRSxPQUFPO0lBQ2QsS0FBSyxFQUFFLE9BQU87Q0FDZCxDQUFDO0FBQ1csUUFBQSxXQUFXLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxDQUFDO0FBQzNGLFFBQUEsc0JBQXNCLEdBQUcsc0JBQXNCLENBQUM7QUFDaEQsUUFBQSxrQkFBa0IsR0FBRyxhQUFhLENBQUM7QUFDbkMsUUFBQSxnQkFBZ0IsR0FBRyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxDQUFDO0FBQzVFLFFBQUEsa0JBQWtCLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxDQUFDO0FBQzVGLFFBQUEsa0JBQWtCLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUNoRSxRQUFBLHlCQUF5QixHQUFHLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsQ0FBQyIsImZpbGUiOiJhcHAvc2hhcmVkL21vZGVscy9jb25zdGFudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgREVGQVVMVF9QQVNTV09SRCA9ICcxMjM0NTYnO1xuZXhwb3J0IGNvbnN0IFVTRVJfU1RBVFVTID0geyAndHJ1ZSc6ICdBY3RpdmUnLCAnZmFsc2UnOiAnU3VzcGVuZGVkJyB9O1xuZXhwb3J0IGNvbnN0IEdFTkRFUiA9IHsgJ21hbGUnOiAnTWFsZScsICdmZW1hbGUnOiAnRmVtYWxlJywgJ290aGVyJzogJ090aGVyJyB9O1xuZXhwb3J0IGNvbnN0IEdST1VQX0NBVEVHT1JZID0geyBVU0VSOiAnb3JnYW5pemF0aW9uJywgUVVFU1RJT046ICdxdWVzdGlvbid9O1xuZXhwb3J0IGNvbnN0IFNFUlZFUl9EQVRFVElNRV9GT1JNQVQgPSAnWVlZWS1NTS1ERCBISDptbTpzcyc7XG5leHBvcnQgY29uc3QgUVVFU1RJT05fVFlQRSA9IHsgJ3NjJzogJ1NpbmdsZS1jaG9pY2UnLCAnZmInOiAnRmlsbC10aGUtYmxhbmsnLCAnZXh0JzogJ09wZW4tZW5kZWQnIH07XG5leHBvcnQgY29uc3QgREVGQVVMVF9EQVRFX0xPQ0FMRSA9IHtcblx0Zmlyc3REYXlPZldlZWs6IDAsXG5cdGRheU5hbWVzOiBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXSxcblx0ZGF5TmFtZXNTaG9ydDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuXHRkYXlOYW1lc01pbjogW1wiU3VcIiwgXCJNb1wiLCBcIlR1XCIsIFwiV2VcIiwgXCJUaFwiLCBcIkZyXCIsIFwiU2FcIl0sXG5cdG1vbnRoTmFtZXM6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdLFxuXHRtb250aE5hbWVzU2hvcnQ6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXSxcblx0dG9kYXk6ICdUb2RheScsXG5cdGNsZWFyOiAnQ2xlYXInXG59O1xuZXhwb3J0IGNvbnN0IEVYQU1fU1RBVFVTID0geyAnZHJhZnQnOiAnRHJhZnQnLCAncHVibGlzaGVkJzogJ1B1Ymxpc2hlZCcsICd1bnB1Ymxpc2hlZCc6ICdVbnB1Ymxpc2hlZCcgfTtcbmV4cG9ydCBjb25zdCBFWFBPUlRfREFURVRJTUVfRk9STUFUID0gXCInZGQtTU0teXl5eSdISDptbTpzc1wiO1xuZXhwb3J0IGNvbnN0IEVYUE9SVF9EQVRFX0ZPUk1BVCA9IFwiJ2RkLU1NLXl5eXlcIjtcbmV4cG9ydCBjb25zdCBFWEFNX01FTUJFUl9ST0xFID0geyAnY2FuZGlkYXRlJzogJ0NhbmRpZGF0ZScsICdzdXBlcnZpc29yJzogJ1N1cGVydmlzb3InIH07XG5leHBvcnQgY29uc3QgRVhBTV9NRU1CRVJfU1RBVFVTID0geyAnYWN0aXZlJzogJ0FjdGl2ZScsICd3aXRoZHJhdyc6ICdXaXRoZHJhdycsICdzdXNwZW5kJzogJ1N1c3BlbmRlZCcgfTtcbmV4cG9ydCBjb25zdCBRVUVTVElPTl9TRUxFQ1RJT04gPSB7ICdtYW51YWwnOiAnTWFudWFsJywgJ3JhbmRvbSc6ICdSYW5kb20nIH07XG5leHBvcnQgY29uc3QgRVhBTV9NRU1CRVJfRU5ST0xMX1NUQVRVUyA9IHsgJ2luLXByb2dyZXNzJzogJ0luLXByb2dyZXNzJywgJ2NvbXBsZXRlJzogJ0NvbXBsZXRlJywgJ3JlZ2lzdGVyZWQnOiAnUmVnaXN0ZXJlZCcgfTtcbiJdfQ==
