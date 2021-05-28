
class CountdownTimer{
    constructor({ targetDate, selector }) {
        this.selector = selector;
        this.targetDate = targetDate

        this.init();
    };

    init() {

        document.querySelector('.value_start').textContent = `End date: ${this.targetDate}`;
        setInterval(() => {

    const endTime = Date.now();

    const deltaTime = this.targetDate - endTime;
            const time = this.getTimeComponents(deltaTime);
            // console.log(time);

            this.updateCountdownface(time);
            

}, 1000)
    }

    getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return {days, hours, mins, secs}
    }

    updateCountdownface({ days, hours, mins, secs }) {
        document.querySelector(`${this.selector} [data-value="days"]`).textContent = days;
        document.querySelector(`${this.selector} [data-value="hours"]`).textContent = hours;
        document.querySelector(`${this.selector} [data-value="mins"]`).textContent = mins;
        document.querySelector(`${this.selector} [data-value="secs"]`).textContent = secs;
    };
};

const timerClass = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('June 4,2021'),
});

