import { Component, OnInit, ViewChild, OnDestroy, HostListener } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  EffectCoverflow
} from 'swiper/core';



 // Set the default value to '+91' (India)

  // Other component code and functions here

const FULL_DASH_ARRAY = 283;
const TIME_LIMIT = 30;
const COLOR_CODES = {
  info: {
    color: 'black',
  },
  warning: {
    color: 'orange',
    threshold: TIME_LIMIT * 0.5, // Change the threshold as needed
  },
  alert: {
    color: 'red',
    threshold: TIME_LIMIT * 0.25, // Change the threshold as needed
  },
};

SwiperCore.use([
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  timePassed = 0;
  timeLeft = TIME_LIMIT;
  timerInterval: any;
  isTimerHidden = true;
  remainingPathColor: string = '';
  selectedCountryCode: string = 'IN';
  buttonText1 = ' By requesting OTP, you agree to the ';
  inputValue: string = '';
  isButtonHidden = true;
  isButtonDisabled = true; 
  input1: string = '';
  input2: string = '';
  input3: string = '';
  input4: string = '';
  isInputsValid: boolean = false;

  phoneNumber: string = ''; // Assign an initial value
  // selectedCountryCode!: string; // Use the non-null assertion operator
  isPhoneNumberValid: boolean = false; // Assign an initial value
  buttonText = 'Request OTP'; // Initial button text


  isFormOpen: boolean = false; // Form ka state track karen

  openForm() {
    this.isFormOpen = true;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    // Yadi "ESC" key press hoti hai to form ko band karen.
    if (this.isFormOpen) {
      this.closeForm();
    }
  }

  closeForm() {
    this.isFormOpen = false;
  }

  
  checkPhoneNumber() {
    if (this.phoneNumber.length <=10) {
      this.phoneNumber = this.phoneNumber.slice(0, 10);
      
       // Truncate the input to maximum 10 characters
    }
    this.isPhoneNumberValid = this.phoneNumber.length === 10;
  }

  handleKeyDown(event: KeyboardEvent) {
    const maxLength = 10;
    if (this.phoneNumber.length >= maxLength && event.key !== 'Backspace') {
      event.preventDefault();
    }
  }

  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;

  testSwiperConfig: any = {
    navigation: false,
    pagination: {
      clickable: true
    },
    slidesPerView: '3',
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  };

  swiperConfig: any = {
    navigation: false,
    pagination: {
      clickable: true
    },
    slidesPerView: '3',
    spaceBetween: 10,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  };

  swiperCarouselConfig: any = {
    navigation: true,
    pagination: {
      clickable: true
    },
    slidesPerView: '1',
    autoplay: {
      delay: 2000,
    },
    effect: 'fade'
  };

  ngOnInit(): void {
  }

  onSwiper(swiper) {
    console.log(swiper);
  }

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }


  start(): void {
    // Handle the button click event here
    // This method will be executed when the button is clicked
    console.log('Start button clicked');
  }
  onMouseEnter(event: any): void {
    event.target.click();
  }

  get circleDasharray(): string {
    return `${this.calculateTimeFraction() * FULL_DASH_ARRAY} ${FULL_DASH_ARRAY}`;
  }

  startTimer(): void {
    this.isTimerHidden = false; // Show the timer
    this.timePassed = 0; // Reset the time passed
    this.timeLeft = TIME_LIMIT; // Reset the time left
    this.remainingPathColor = 'black'; // Set initial border color as black
    this.buttonText = 'Resend OTP'; // Update the button text to "Resend"
    this.timerInterval = setInterval(() => {
      this.timePassed += 1;
      this.timeLeft = TIME_LIMIT - this.timePassed;
      this.updateRemainingPathColor();
      if (this.timeLeft === 0) {
        this.onTimesUp();
        this.isTimerHidden = true; // Hide the timer when it reaches 0
      }
    }, 1000);
  }

  onTimesUp(): void {
    clearInterval(this.timerInterval);
  }

  formatTime(time: number): string {
    let seconds: string | number = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${seconds}`;
  }

  updateRemainingPathColor(): void {
    const { warning, alert } = COLOR_CODES;
    if (this.timeLeft <= warning.threshold) {
      this.remainingPathColor = 'orange';
    }
    if (this.timeLeft <= alert.threshold) {
      this.remainingPathColor = 'red';
    }
  }

  calculateTimeFraction(): number {
    const rawTimeFraction = this.timeLeft / TIME_LIMIT;
    return rawTimeFraction;
  }

  ngOnDestroy(): void {
    this.onTimesUp();
  }

  onKeyUp(event: any, nextIndex: number | null): void {
    const input = event.target;
    const maxLength = parseInt(input.getAttribute('maxlength'));

    if (input.value.length >= maxLength) {
      if (nextIndex !== null) {
        const nextInput = document.querySelector(`.otp-container input:nth-child(${nextIndex})`) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      } else {
        this.isInputsValid = true;
      }
    } else {
      this.isInputsValid = false;
    }
  }
  changeButtonText() {
    this.buttonText = 'Hello CLOREV';
  }
  changeText() {
    const termsLink = document.createElement('a');
    termsLink.href = 'javascript:void(0)';
    termsLink.innerText = 'Edit Mob No';
    termsLink.style.color = '#2596be';
    termsLink.style.marginLeft = "-10px";
    termsLink.style.paddingRight = "47px";
    

    
    termsLink.addEventListener('click', (event) => {
      event.preventDefault();
      const phoneNumberInput = document.getElementById('mob-input') as HTMLInputElement;
      phoneNumberInput.focus();
    });
    


    const privacyLink = document.createElement('a');
    privacyLink.href = '#';
    privacyLink.innerText = 'Get OTP on Call';
    termsLink.style.marginRight = '86px';
    privacyLink.style.color = '#2596be';


    const termsSpan = document.createElement('span');
    termsSpan.style.color = 'var(--clorev-primary)';
    termsSpan.appendChild(termsLink);


    const privacySpan = document.createElement('span');
    privacySpan.style.color = 'var(--clorev-primary)';
    privacySpan.appendChild(privacyLink);

    const label = document.querySelector('.form-check-label');
    label.innerHTML = 'OTP has been sent to above mobile number.<br>';
    label.appendChild(termsSpan);
    label.innerHTML += ' ';
    label.appendChild(privacySpan);
  }
  onInputChange() {
    this.isButtonHidden = !this.phoneNumber.trim(); // Hide the button if the input is empty or contains only whitespace characters
    this.isButtonDisabled = !this.phoneNumber.trim(); // Disable the button if the input is empty or contains only whitespace characters
  }

  clearInput() {
    this.phoneNumber = '';
    this.isButtonHidden = true; // Hide the button again after clearing the input
    this.isButtonDisabled = true; // Disable the button again after clearing the input
  }

  
}