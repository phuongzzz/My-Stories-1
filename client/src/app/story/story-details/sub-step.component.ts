import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  templateUrl: './sub-step.component.html',
  styleUrls: ['./sub-step.component.scss']
})

export class SubStepComponent implements AfterViewInit {
  public name: string;
  public sub_steps: any[];

  ngAfterViewInit() {
    (function($) {
      $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp(300);

        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
        } else {
          $(this).closest('.accordion').find('a.active').removeClass('active');
          $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle(300);

        j.preventDefault();
      });
    })(jQuery);
  }
}
