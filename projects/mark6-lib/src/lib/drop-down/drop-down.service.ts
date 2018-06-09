import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DropDownService {

    // Observable string sources
    private subject = new Subject();

    close(target) {
        this.subject.next(target);
    }

    getState() {
        return this.subject.asObservable();
    }

}
