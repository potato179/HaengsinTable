const School = require("school-kr");
const school = new School();

const getinfo = async function() {
    const result = await school.search(School.Region.GYEONGGI, '행신중');
    school.init(School.Type.MIDDLE, School.Region.GYEONGGI, result[0].schoolCode);

    const meal = await school.getMeal();
    const calendar = await school.getCalendar();
    const todaydate = meal.day;

    let send_meal;
    let send_calendar;

    console.log(`${meal.month}월 ${todaydate}일 \n\n`);
    send_meal = meal.today;
    send_calendar = calendar[todaydate];
    console.log(send_meal, send_calendar);
    
    function send(req, res, next){
        
    }
}

getinfo()

