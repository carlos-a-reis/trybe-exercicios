const wakeup = () => 'Acordando!!';

const brakefast = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (fun) => console.log(fun());

doingThings(wakeup);
doingThings(brakefast);
doingThings(sleep);