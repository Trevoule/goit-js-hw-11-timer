

const refs = {
    daysRef: document.querySelector('.value[data-value="days"]'),
    hoursRef: document.querySelector('.value[data-value="hours"]'),
    minsRef: document.querySelector('.value[data-value="mins"]'),
    secsRef: document.querySelector('.value[data-value="secs"]'),
    
};

// const targetTime = new Date('June 4,2021');
// const endTime = Date.now();

// updateCountdownface(getTimeComponents(targetTime - endTime));

class CountdownTimer{
    constructor({targetDate, selector }) {
        this.selector = selector;
        this.targetDate = targetDate
    }

    init() {
        setInterval(() => {
    // const targetTime = new Date('June 4,2021');
    const endTime = Date.now();

    const deltaTime = this.targetDate - endTime;
    // const deltaTime = targetTime - endTime;
    const time = this.getTimeComponents(deltaTime);

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
    refs.daysRef.textContent = days
    refs.hoursRef.textContent = hours
    refs.minsRef.textContent = mins
    refs.secsRef.textContent = secs
    };
};

const timerClass = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('June 4,2021'),
})

timerClass.init()
