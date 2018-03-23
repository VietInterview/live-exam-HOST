"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var InterceptHttp = (function (_super) {
    __extends(InterceptHttp, _super);
    function InterceptHttp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    InterceptHttp.prototype.post = function (url, data, options) {
        return _super.prototype.post.call(this, url, data, options).catch(function (error) {
            if (error.status >= 400) {
                console.log(error);
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return InterceptHttp;
}(http_1.Http));
exports.InterceptHttp = InterceptHttp;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaGVscGVycy9pbnRlcmNlcHQuaHR0cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFHQSxzQ0FBZ0g7QUFDaEgsOENBQTZDO0FBQzdDLG1DQUFpQztBQUNqQyxxQ0FBbUM7QUFHbkM7SUFBbUMsaUNBQUk7SUFFbkMsdUJBQVksT0FBbUIsRUFBRSxjQUE4QjtlQUMzRCxrQkFBTSxPQUFPLEVBQUUsY0FBYyxDQUFDO0lBQ2xDLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssR0FBVyxFQUFHLElBQVksRUFBRSxPQUF1QjtRQUNwRCxNQUFNLENBQUMsaUJBQU0sSUFBSSxZQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsS0FBZTtZQUN4RCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFHLEdBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQztZQUNELE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTCxvQkFBQztBQUFELENBZkEsQUFlQyxDQWZrQyxXQUFJLEdBZXRDO0FBZlksc0NBQWEiLCJmaWxlIjoiYXBwL3NoYXJlZC9oZWxwZXJzL2ludGVyY2VwdC5odHRwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcXVlc3QsIFhIUkJhY2tlbmQsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSwgSHR0cCwgUmVxdWVzdE9wdGlvbnNBcmdzLCBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xuXG5cbmV4cG9ydCBjbGFzcyBJbnRlcmNlcHRIdHRwIGV4dGVuZHMgSHR0cCB7XG5cbiAgICBjb25zdHJ1Y3RvcihiYWNrZW5kOiBYSFJCYWNrZW5kLCBkZWZhdWx0T3B0aW9uczogUmVxdWVzdE9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoYmFja2VuZCwgZGVmYXVsdE9wdGlvbnMpO1xuICAgIH1cblxuICAgIHBvc3QodXJsOiBzdHJpbmcgLCBkYXRhOiBzdHJpbmcsIG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gc3VwZXIucG9zdCh1cmwsIGRhdGEsIG9wdGlvbnMpLmNhdGNoKChlcnJvcjogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPj00MDAgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==
