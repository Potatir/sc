// Schedule Master Data extracted from screenshots for all students
const timeSlots = [
    { start: "08:00", end: "08:50" },
    { start: "09:00", end: "09:50" },
    { start: "10:00", end: "10:50" },
    { start: "11:00", end: "11:50" },
    { start: "12:00", end: "12:50" },
    { start: "13:05", end: "13:55" },
    { start: "14:00", end: "14:50" },
    { start: "15:00", end: "15:50" },
    { start: "16:00", end: "16:50" },
    { start: "17:00", end: "17:50" },
    { start: "18:00", end: "18:50" },
    { start: "19:00", end: "19:50" },
    { start: "20:00", end: "20:50" },
    { start: "21:00", end: "21:50" }
];

const dayNames = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота"
};

// Danon's Schedule Data
const danonSchedule = [
    // Понедельник
    { day: 1, startTime: "18:00", endTime: "18:50", subject: "Иностранный (немецкий) язык 1 (A1.1)", code: "F(GERMAN)L54-GR-P16", type: "Практические занятия", teacher: "Оспанова Ж.Т.", room: "C1.3.233 lab", category: "german" },
    { day: 1, startTime: "21:00", endTime: "21:50", subject: "Математический анализ 1", code: "CAL52-EN-L28", type: "Лекции", teacher: "Рахимбаева Ж.Б.", room: "Онлайн", category: "math" },

    // Вторник
    { day: 2, startTime: "10:00", endTime: "10:50", subject: "Математический анализ 1", code: "CAL52-EN-L28", type: "Лекции", teacher: "Рахимбаева Ж.Б.", room: "C1.2.237L", category: "math" },
    { day: 2, startTime: "11:00", endTime: "11:50", subject: "Математический анализ 1", code: "CAL52-EN-L28", type: "Лекции", teacher: "Рахимбаева Ж.Б.", room: "C1.2.237L", category: "math" },
    { day: 2, startTime: "12:00", endTime: "12:50", subject: "Линейная алгебра", code: "LA52-EN-L9", type: "Лекции", teacher: "Мухамедина А.И.", room: "C1.3.370L", category: "algebra" },
    { day: 2, startTime: "13:05", endTime: "13:55", subject: "Линейная алгебра", code: "LA52-EN-L9", type: "Лекции", teacher: "Мухамедина А.И.", room: "C1.3.370L", category: "algebra" },

    // Среда
    { day: 3, startTime: "10:00", endTime: "10:50", subject: "Информационно-коммуникационные технологии", code: "ICT51-EN-P83", type: "Практические занятия", teacher: "Аубакирова А.М.", room: "C1.2.242K", category: "ict" },
    { day: 3, startTime: "11:00", endTime: "11:50", subject: "Информационно-коммуникационные технологии", code: "ICT51-EN-P83", type: "Практические занятия", teacher: "Аубакирова А.М.", room: "C1.2.242K", category: "ict" },
    { day: 3, startTime: "12:00", endTime: "12:50", subject: "Линейная алгебра", code: "LA52-EN-P27", type: "Практические занятия", teacher: "Мухамедина А.И.", room: "C1.2.222P", category: "algebra" },
    { day: 3, startTime: "13:05", endTime: "13:55", subject: "Линейная алгебра", code: "LA52-EN-P27", type: "Практические занятия", teacher: "Мухамедина А.И.", room: "C1.2.222P", category: "algebra" },
    { day: 3, startTime: "16:00", endTime: "16:50", subject: "Иностранный (немецкий) язык 1 (A1.1)", code: "F(GERMAN)L54-GR-P16", type: "Практические занятия", teacher: "Оспанова Ж.Т.", room: "C1.3.321P", category: "german" },
    { day: 3, startTime: "17:00", endTime: "17:50", subject: "Иностранный (немецкий) язык 1 (A1.1)", code: "F(GERMAN)L54-GR-P16", type: "Практические занятия", teacher: "Оспанова Ж.Т.", room: "C1.3.321P", category: "german" },
    { day: 3, startTime: "20:00", endTime: "20:50", subject: "Информационно-коммуникационные технологии", code: "ICT51-EN-L13", type: "Лекции", teacher: "Айтмұханбетова Э.А.", room: "Лекционный зал", category: "ict" },
    { day: 3, startTime: "21:00", endTime: "21:50", subject: "Информационно-коммуникационные технологии", code: "ICT51-EN-L13", type: "Лекции", teacher: "Айтмұханбетова Э.А.", room: "Лекционный зал", category: "ict" },

    // Четверг
    { day: 4, startTime: "09:00", endTime: "09:50", subject: "Линейная алгебра", code: "LA52-EN-L9", type: "Лекции", teacher: "Мухамедина А.И.", room: "C1.3.370L", category: "algebra" },
    { day: 4, startTime: "10:00", endTime: "10:50", subject: "Введение в программирование 1", code: "IP52-EN-P37", type: "Практические занятия", teacher: "Нәдіров Н.Қ.", room: "C1.1.352K", category: "prog" },
    { day: 4, startTime: "11:00", endTime: "11:50", subject: "Введение в программирование 1", code: "IP52-EN-P37", type: "Практические занятия", teacher: "Нәдіров Н.Қ.", room: "C1.1.352K", category: "prog" },
    { day: 4, startTime: "20:00", endTime: "20:50", subject: "Введение в программирование 1", code: "IP52-EN-L7", type: "Лекции", teacher: "Хаймульдин А.Г.", room: "Лекционный зал", category: "prog" },
    { day: 4, startTime: "21:00", endTime: "21:50", subject: "Введение в программирование 1", code: "IP52-EN-L7", type: "Лекции", teacher: "Хаймульдин А.Г.", room: "Лекционный зал", category: "prog" },

    // Пятница
    { day: 5, startTime: "09:00", endTime: "09:50", subject: "Математический анализ 1", code: "CAL52-EN-P86", type: "Практические занятия", teacher: "Рахимбаева Ж.Б.", room: "C1.3.232P", category: "math" },
    { day: 5, startTime: "10:00", endTime: "10:50", subject: "Математический анализ 1", code: "CAL52-EN-P86", type: "Практические занятия", teacher: "Рахимбаева Ж.Б.", room: "C1.3.232P", category: "math" },
    { day: 5, startTime: "16:00", endTime: "16:50", subject: "Физическая культура", code: "PE21-EN-P368", type: "Практические занятия", teacher: "Канагат М.М.", room: "Спорт зал", category: "pe" },
    { day: 5, startTime: "17:00", endTime: "17:50", subject: "Физическая культура", code: "PE21-EN-P368", type: "Практические занятия", teacher: "Канагат М.М.", room: "Спорт зал", category: "pe" },
    { day: 5, startTime: "18:00", endTime: "18:50", subject: "Иностранный (немецкий) язык 1 (A1.1)", code: "F(GERMAN)L54-GR-P16", type: "Практические занятия", teacher: "Оспанова Ж.Т.", room: "C1.3.321P", category: "german" },
    { day: 5, startTime: "19:00", endTime: "19:50", subject: "Иностранный (немецкий) язык 1 (A1.1)", code: "F(GERMAN)L54-GR-P16", type: "Практические занятия", teacher: "Оспанова Ж.Т.", room: "C1.3.321P", category: "german" },
    { day: 5, startTime: "20:00", endTime: "20:50", subject: "Информационно-коммуникационные технологии", code: "ICT51-EN-L13", type: "Лекции", teacher: "Айтмұханбетова Э.А.", room: "Лекционный зал", category: "ict" },

    // Суббота
    { day: 6, startTime: "08:00", endTime: "08:50", subject: "Введение в программирование 1", code: "IP52-EN-P37", type: "Практические занятия", teacher: "Нәдіров Н.Қ.", room: "C1.1.242K", category: "prog" },
    { day: 6, startTime: "10:00", endTime: "10:50", subject: "Культурология", code: "CS21-EN-L8", type: "Лекции", teacher: "Альжанова Г.М.", room: "C1.1.334L", category: "culture" },
    { day: 6, startTime: "11:00", endTime: "11:50", subject: "Культурология", code: "CS21-EN-P29", type: "Практические занятия", teacher: "Альжанова Г.М.", room: "C1.3.232P", category: "culture" }
];

// Aidana's Schedule Data
const aidanaSchedule = [
    // Понедельник
    { day: 1, startTime: "08:00", endTime: "08:50", subject: "Информационно-коммуникационные технологии", code: "ICT51-EN-P55", type: "Практические занятия", teacher: "Казбекова Д.О.", room: "C1.1.357K", category: "ict" },
    { day: 1, startTime: "09:00", endTime: "09:50", subject: "Информационно-коммуникационные технологии", code: "ICT51-EN-P55", type: "Практические занятия", teacher: "Казбекова Д.О.", room: "C1.1.357K", category: "ict" },
    { day: 1, startTime: "21:00", endTime: "21:50", subject: "Математический анализ 1", code: "CAL52-EN-L19", type: "Лекции", teacher: "Букаева М.С.", room: "Онлайн", category: "math" },

    // Вторник
    { day: 2, startTime: "10:00", endTime: "10:50", subject: "Математический анализ 1", code: "CAL52-EN-P55", type: "Практические занятия", teacher: "Әжіхан А.Қ.", room: "C1.1.326", category: "math" },
    { day: 2, startTime: "11:00", endTime: "11:50", subject: "Математический анализ 1", code: "CAL52-EN-P55", type: "Практические занятия", teacher: "Әжіхан А.Қ.", room: "C1.1.326", category: "math" },
    { day: 2, startTime: "14:00", endTime: "14:50", subject: "Цифровые медиа, культура и общество 1", code: "DMCS54-EN-P7", type: "Практические занятия", teacher: "Кусманова А.Г.", room: "C1.3.322", category: "media" },
    { day: 2, startTime: "15:00", endTime: "15:50", subject: "Цифровые медиа, культура и общество 1", code: "DMCS54-EN-P7", type: "Практические занятия", teacher: "Кусманова А.Г.", room: "C1.3.322", category: "media" },
    { day: 2, startTime: "16:00", endTime: "16:50", subject: "Цифровые медиа, культура и общество 1", code: "DMCS54-EN-P7", type: "Практические занятия", teacher: "Кусманова А.Г.", room: "C1.3.322", category: "media" },

    // Среда
    { day: 3, startTime: "08:00", endTime: "08:50", subject: "Линейная алгебра", code: "LA52-EN-L7", type: "Лекции", teacher: "Мырзагалиева А.Х.", room: "C1.3.361", category: "algebra" },
    { day: 3, startTime: "09:00", endTime: "09:50", subject: "Линейная алгебра", code: "LA52-EN-L7", type: "Лекции", teacher: "Мырзагалиева А.Х.", room: "C1.3.361", category: "algebra" },
    { day: 3, startTime: "10:00", endTime: "10:50", subject: "Математический анализ 1", code: "CAL52-EN-L19", type: "Лекции", teacher: "Букаева М.С.", room: "C1.3.365L", category: "math" },
    { day: 3, startTime: "11:00", endTime: "11:50", subject: "Математический анализ 1", code: "CAL52-EN-L19", type: "Лекции", teacher: "Букаева М.С.", room: "C1.3.365L", category: "math" },
    { day: 3, startTime: "12:00", endTime: "12:50", subject: "Введение в программирование 1", code: "IP52-EN-P45", type: "Практические занятия", teacher: "Туткышбаева Ш.С.", room: "C1.1.352K", category: "prog" },
    { day: 3, startTime: "13:05", endTime: "13:55", subject: "Введение в программирование 1", code: "IP52-EN-P45", type: "Практические занятия", teacher: "Туткышбаева Ш.С.", room: "C1.1.352K", category: "prog" },
    { day: 3, startTime: "20:00", endTime: "20:50", subject: "Информационно-коммуникационные технологии", code: "ICT51-EN-L13", type: "Лекции", teacher: "Айтмұханбетова Э.А.", room: "Онлайн", category: "ict" },

    // Четверг
    { day: 4, startTime: "09:00", endTime: "09:50", subject: "Культурология", code: "CS21-EN-P21", type: "Практические занятия", teacher: "Альжанова Г.М.", room: "C1.3.232P", category: "culture" },
    { day: 4, startTime: "10:00", endTime: "10:50", subject: "Введение в программирование 1", code: "IP52-EN-P45", type: "Практические занятия", teacher: "Туткышбаева Ш.С.", room: "C1.1.245K", category: "prog" },
    { day: 4, startTime: "20:00", endTime: "20:50", subject: "Введение в программирование 1", code: "IP52-EN-L5", type: "Лекции", teacher: "Хаймульдин А.Г.", room: "Онлайн", category: "prog" },
    { day: 4, startTime: "21:00", endTime: "21:50", subject: "Введение в программирование 1", code: "IP52-EN-L5", type: "Лекции", teacher: "Хаймульдин А.Г.", room: "Онлайн", category: "prog" },

    // Пятница
    { day: 5, startTime: "09:00", endTime: "09:50", subject: "Линейная алгебра", code: "LA52-EN-L7", type: "Лекции", teacher: "Мырзагалиева А.Х.", room: "C1.3.234L", category: "algebra" },
    { day: 5, startTime: "11:00", endTime: "11:50", subject: "Линейная алгебра", code: "LA52-EN-P18", type: "Практические занятия", teacher: "Ғабит Л.", room: "C1.2.227P", category: "algebra" },
    { day: 5, startTime: "12:00", endTime: "12:50", subject: "Линейная алгебра", code: "LA52-EN-P18", type: "Практические занятия", teacher: "Ғабит Л.", room: "C1.2.227P", category: "algebra" },
    { day: 5, startTime: "16:00", endTime: "16:50", subject: "Физическая культура", code: "PE21-EN-P368", type: "Практические занятия", teacher: "Канагат М.М.", room: "Спорт зал", category: "pe" },
    { day: 5, startTime: "17:00", endTime: "17:50", subject: "Физическая культура", code: "PE21-EN-P368", type: "Практические занятия", teacher: "Канагат М.М.", room: "Спорт зал", category: "pe" },
    { day: 5, startTime: "20:00", endTime: "20:50", subject: "Информационно-коммуникационные технологии", code: "ICT51-EN-L13", type: "Лекции", teacher: "Айтмұханбетова Э.А.", room: "Онлайн", category: "ict" },

    // Суббота
    { day: 6, startTime: "08:00", endTime: "08:50", subject: "Культурология", code: "CS21-EN-L6", type: "Лекции", teacher: "Альжанова Г.М.", room: "C1.1.334L", category: "culture" },
    { day: 6, startTime: "18:00", endTime: "18:50", subject: "Цифровые медиа, культура и общество 1", code: "DMCS54-EN-P7", type: "Практические занятия", teacher: "Кусманова А.Г.", room: "Онлайн", category: "media" },
    { day: 6, startTime: "19:00", endTime: "19:50", subject: "Цифровые медиа, культура и общество 1", code: "DMCS54-EN-P7", type: "Практические занятия", teacher: "Кусманова А.Г.", room: "Онлайн", category: "media" }
];

// Anzi's Schedule Data
const anziSchedule = [
    // Понедельник
    { day: 1, startTime: "08:00", endTime: "08:50", subject: "Математический анализ 1", code: "CAL52-EN-L14", type: "Лекции", teacher: "Кудайбергенов С.Т.", room: "Онлайн", category: "math" },
    { day: 1, startTime: "09:00", endTime: "09:50", subject: "Математический анализ 1", code: "CAL52-EN-L14", type: "Лекции", teacher: "Кудайбергенов С.Т.", room: "Онлайн", category: "math" },
    { day: 1, startTime: "16:00", endTime: "16:50", subject: "Иностранный (китайский) язык 1 (A1)", code: "F(CHINESE)L54-CH-P17", type: "Практические занятия", teacher: "Туякова Л.Б.", room: "Языковая лаб", category: "chinese" },
    { day: 1, startTime: "17:00", endTime: "17:50", subject: "Иностранный (китайский) язык 1 (A1)", code: "F(CHINESE)L54-CH-P17", type: "Практические занятия", teacher: "Туякова Л.Б.", room: "Языковая лаб", category: "chinese" },

    // Вторник
    { day: 2, startTime: "10:00", endTime: "10:50", subject: "Линейная алгебра", code: "LA52-EN-L1", type: "Лекции", teacher: "Сатбаев С.К.", room: "C1.3.370L", category: "algebra" },
    { day: 2, startTime: "11:00", endTime: "11:50", subject: "Линейная алгебра", code: "LA52-EN-L1", type: "Лекции", teacher: "Сатбаев С.К.", room: "C1.3.370L", category: "algebra" },
    { day: 2, startTime: "20:00", endTime: "20:50", subject: "Информационно-коммуникационные технологии", code: "ICT51-EN-L11", type: "Лекции", teacher: "Айтмұханбетова Э.А.", room: "Лекционный зал", category: "ict" },

    // Среда
    { day: 3, startTime: "08:00", endTime: "08:50", subject: "Информационно-коммуникационные технологии", code: "ICT51-EN-P34", type: "Практические занятия", teacher: "Азимбаев Б.Ж.", room: "C1.2.242K", category: "ict" },
    { day: 3, startTime: "09:00", endTime: "09:50", subject: "Информационно-коммуникационные технологии", code: "ICT51-EN-P34", type: "Практические занятия", teacher: "Азимбаев Б.Ж.", room: "C1.2.242K", category: "ict" },
    { day: 3, startTime: "10:00", endTime: "10:50", subject: "Введение в программирование 1", code: "IP52-EN-P24", type: "Практические занятия", teacher: "Нұрланқызы А.", room: "C1.1.352K", category: "prog" },
    { day: 3, startTime: "11:00", endTime: "11:50", subject: "Введение в программирование 1", code: "IP52-EN-P24", type: "Практические занятия", teacher: "Нұрланқызы А.", room: "C1.1.352K", category: "prog" },
    { day: 3, startTime: "20:00", endTime: "20:50", subject: "Информационно-коммуникационные технологии", code: "ICT51-EN-L11", type: "Лекции", teacher: "Айтмұханбетова Э.А.", room: "Онлайн", category: "ict" },
    { day: 3, startTime: "21:00", endTime: "21:50", subject: "Информационно-коммуникационные технологии", code: "ICT51-EN-L11", type: "Лекции", teacher: "Айтмұханбетова Э.А.", room: "Онлайн", category: "ict" },

    // Четверг
    { day: 4, startTime: "09:00", endTime: "09:50", subject: "Введение в программирование 1", code: "IP52-EN-P24", type: "Практические занятия", teacher: "Нұрланқызы А.", room: "C1.1.245K", category: "prog" },
    { day: 4, startTime: "10:00", endTime: "10:50", subject: "Математический анализ 1", code: "CAL52-EN-P32", type: "Практические занятия", teacher: "Кудайбергенов С.Т.", room: "C1.3.232P", category: "math" },
    { day: 4, startTime: "11:00", endTime: "11:50", subject: "Математический анализ 1", code: "CAL52-EN-P32", type: "Практические занятия", teacher: "Кудайбергенов С.Т.", room: "C1.3.232P", category: "math" },
    { day: 4, startTime: "16:00", endTime: "16:50", subject: "Иностранный (китайский) язык 1 (A1)", code: "F(CHINESE)L54-CH-P17", type: "Практические занятия", teacher: "Туякова Л.Б.", room: "Языковая лаб", category: "chinese" },
    { day: 4, startTime: "20:00", endTime: "20:50", subject: "Введение в программирование 1", code: "IP52-EN-L1", type: "Лекции", teacher: "Хаймульдин А.Г.", room: "Онлайн", category: "prog" },
    { day: 4, startTime: "21:00", endTime: "21:50", subject: "Введение в программирование 1", code: "IP52-EN-L1", type: "Лекции", teacher: "Хаймульдин А.Г.", room: "Онлайн", category: "prog" },

    // Пятница
    { day: 5, startTime: "09:00", endTime: "09:50", subject: "Культурология", code: "CS21-EN-L21", type: "Лекции", teacher: "Кулманова А.А.", room: "C1.1.334L", category: "culture" },
    { day: 5, startTime: "10:00", endTime: "10:50", subject: "Линейная алгебра", code: "LA52-EN-L1", type: "Лекции", teacher: "Сатбаев С.К.", room: "C1.3.370L", category: "algebra" },
    { day: 5, startTime: "11:00", endTime: "11:50", subject: "Культурология", code: "CS21-EN-P31", type: "Практические занятия", teacher: "Кайдарова Т.К.", room: "C1.3.232P", category: "culture" },
    { day: 5, startTime: "16:00", endTime: "16:50", subject: "Физическая культура", code: "PE21-EN-P365", type: "Практические занятия", teacher: "Макажанова Г.Б.", room: "Спорт зал", category: "pe" },
    { day: 5, startTime: "17:00", endTime: "17:50", subject: "Физическая культура", code: "PE21-EN-P365", type: "Практические занятия", teacher: "Макажанова Г.Б.", room: "Спорт зал", category: "pe" },

    // Суббота
    { day: 6, startTime: "10:00", endTime: "10:50", subject: "Линейная алгебра", code: "LA52-EN-P2", type: "Практические занятия", teacher: "Сатбаев С.К.", room: "C1.2.222P", category: "algebra" },
    { day: 6, startTime: "11:00", endTime: "11:50", subject: "Линейная алгебра", code: "LA52-EN-P2", type: "Практические занятия", teacher: "Сатбаев С.К.", room: "C1.2.222P", category: "algebra" },
    { day: 6, startTime: "18:00", endTime: "18:50", subject: "Иностранный (китайский) язык 1 (A1)", code: "F(CHINESE)L54-CH-P17", type: "Практические занятия", teacher: "Туякова Л.Б.", room: "Языковая лаб", category: "chinese" },
    { day: 6, startTime: "19:00", endTime: "19:50", subject: "Иностранный (китайский) язык 1 (A1)", code: "F(CHINESE)L54-CH-P17", type: "Практические занятия", teacher: "Туякова Л.Б.", room: "Языковая лаб", category: "chinese" },
    { day: 6, startTime: "21:00", endTime: "21:50", subject: "Математический анализ 1", code: "CAL52-EN-L14", type: "Лекции", teacher: "Кудайбергенов С.Т.", room: "Онлайн", category: "math" }
];

// App State
let currentStudent = localStorage.getItem("studentProfile") || "danon";
let currentFilter = {
    search: "",
    type: "all",
    subject: "all"
};

function getActiveSchedule() {
    if (currentStudent === "aidana") return aidanaSchedule;
    if (currentStudent === "anzi") return anziSchedule;
    return danonSchedule;
}

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initStudentSwitcher();
    highlightTodayHeader();
    populateSubjectFilterOptions();
    renderGridTable();
    renderCardsView();
    updateLiveTracker();
    updateFooterStats();

    // Event Listeners
    setupEventListeners();

    // Live clock interval
    setInterval(updateLiveTracker, 1000);
});

// Student Switcher Setup
function initStudentSwitcher() {
    const studentBtns = document.querySelectorAll(".student-btn");
    studentBtns.forEach(btn => {
        if (btn.dataset.student === currentStudent) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }

        btn.addEventListener("click", () => {
            studentBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentStudent = btn.dataset.student;
            localStorage.setItem("studentProfile", currentStudent);

            // Re-render schedule for newly selected student
            populateSubjectFilterOptions();
            renderGridTable();
            renderCardsView();
            updateLiveTracker();
            updateFooterStats();
            applyFilters();
        });
    });
}

// Dynamically populate subjects in filter select based on active schedule
function populateSubjectFilterOptions() {
    const select = document.getElementById("subject-filter");
    select.innerHTML = `<option value="all">Все предметы</option>`;

    const schedule = getActiveSchedule();
    const uniqueSubjects = [...new Set(schedule.map(s => s.subject))].sort();

    uniqueSubjects.forEach(subj => {
        const option = document.createElement("option");
        option.value = subj;
        option.textContent = subj;
        select.appendChild(option);
    });

    currentFilter.subject = "all";
}

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector("#theme-toggle i");
    if (theme === "light") {
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
}

// Highlight Current Day Header
function highlightTodayHeader() {
    const now = new Date();
    let currentDay = now.getDay(); // 0 is Sunday, 1 is Monday...
    if (currentDay === 0) currentDay = 7;

    const headers = document.querySelectorAll(".day-header");
    headers.forEach(h => {
        const dayNum = parseInt(h.dataset.day);
        if (dayNum === currentDay) {
            h.classList.add("today");
        }
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Theme Toggle Button
    const themeBtn = document.getElementById("theme-toggle");
    themeBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon(newTheme);
    });

    // View Switching Buttons
    const viewBtns = document.querySelectorAll(".view-btn");
    viewBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            viewBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const viewMode = btn.dataset.view;
            document.querySelectorAll(".view-container").forEach(v => v.classList.remove("active"));
            document.getElementById(`${viewMode}-view`).classList.add("active");
        });
    });

    // Search and Filter Listeners
    const searchInput = document.getElementById("search-input");
    const clearBtn = document.getElementById("clear-search");
    const typeSelect = document.getElementById("type-filter");
    const subjectSelect = document.getElementById("subject-filter");

    searchInput.addEventListener("input", (e) => {
        currentFilter.search = e.target.value.toLowerCase().trim();
        clearBtn.style.display = currentFilter.search ? "block" : "none";
        applyFilters();
    });

    clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        currentFilter.search = "";
        clearBtn.style.display = "none";
        applyFilters();
    });

    typeSelect.addEventListener("change", (e) => {
        currentFilter.type = e.target.value;
        applyFilters();
    });

    subjectSelect.addEventListener("change", (e) => {
        currentFilter.subject = e.target.value;
        applyFilters();
    });

    // Modal Close Listeners
    const modalBackdrop = document.getElementById("modal-backdrop");
    const modalCloseBtn = document.getElementById("modal-close");
    const modalFooterCloseBtn = document.getElementById("modal-close-btn");

    const closeModal = () => modalBackdrop.classList.remove("active");
    modalCloseBtn.addEventListener("click", closeModal);
    modalFooterCloseBtn.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", (e) => {
        if (e.target === modalBackdrop) closeModal();
    });
}

// Render Main Grid Table View
function renderGridTable() {
    const tbody = document.getElementById("table-body");
    tbody.innerHTML = "";

    const activeSchedule = getActiveSchedule();

    timeSlots.forEach(slot => {
        const tr = document.createElement("tr");

        // Time Column Cell
        const timeTd = document.createElement("td");
        timeTd.className = "time-cell";
        timeTd.innerHTML = `
            <span class="time-start">${slot.start}</span>
            <span class="time-end">${slot.end}</span>
        `;
        tr.appendChild(timeTd);

        // Days 1 through 6 Cells
        for (let day = 1; day <= 6; day++) {
            const td = document.createElement("td");
            td.dataset.day = day;
            td.dataset.time = slot.start;

            const lesson = activeSchedule.find(item => item.day === day && item.startTime === slot.start);

            if (lesson) {
                const cellContent = document.createElement("div");
                cellContent.className = "cell-content";
                const card = createLessonCard(lesson);
                cellContent.appendChild(card);
                td.appendChild(cellContent);
            }

            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    });
}

// Create Card HTML for Grid Cell
function createLessonCard(lesson) {
    const card = document.createElement("div");
    card.className = `lesson-card card-${lesson.category}`;
    card.dataset.lessonId = `${lesson.day}-${lesson.startTime}`;
    card.dataset.subject = lesson.subject;
    card.dataset.type = lesson.type;
    card.dataset.teacher = lesson.teacher;
    card.dataset.room = lesson.room;

    const shortType = lesson.type === "Практические занятия" ? "Практ." : "Лекция";

    card.innerHTML = `
        <div class="card-top">
            <span class="card-type-badge">${shortType}</span>
            <span class="card-code">${lesson.code}</span>
        </div>
        <div class="card-title">${lesson.subject}</div>
        <div class="card-details">
            <span class="card-room"><i class="fa-solid fa-location-dot"></i> ${lesson.room}</span>
            <span class="card-teacher" title="${lesson.teacher}">${lesson.teacher}</span>
        </div>
    `;

    card.addEventListener("click", () => openLessonModal(lesson));
    return card;
}

// Render Day-by-Day Cards View
function renderCardsView() {
    const container = document.getElementById("days-columns");
    container.innerHTML = "";

    const activeSchedule = getActiveSchedule();

    const now = new Date();
    let currentDay = now.getDay();
    if (currentDay === 0) currentDay = 7;

    for (let day = 1; day <= 6; day++) {
        const dayLessons = activeSchedule.filter(l => l.day === day);
        const col = document.createElement("div");
        col.className = `day-column ${day === currentDay ? "today-col" : ""}`;

        const colHeader = document.createElement("div");
        colHeader.className = "day-col-header";
        colHeader.innerHTML = `
            <h3>${dayNames[day]}</h3>
            <span class="col-badge">${dayLessons.length} занятий</span>
        `;
        col.appendChild(colHeader);

        const lessonsList = document.createElement("div");
        lessonsList.className = "col-lessons-list";

        if (dayLessons.length === 0) {
            lessonsList.innerHTML = `<div class="empty-day"><i class="fa-solid fa-mug-hot" style="margin-bottom:8px; font-size:1.5rem; display:block;"></i> Занятий нет</div>`;
        } else {
            dayLessons.forEach(lesson => {
                const card = document.createElement("div");
                card.className = `col-lesson-card card-${lesson.category}`;
                card.innerHTML = `
                    <div class="col-card-time">
                        <i class="fa-regular fa-clock"></i> ${lesson.startTime} - ${lesson.endTime} &bull; ${lesson.type}
                    </div>
                    <div class="card-title">${lesson.subject}</div>
                    <div class="card-details">
                        <span class="card-room"><i class="fa-solid fa-location-dot"></i> ${lesson.room}</span>
                        <span class="card-teacher">${lesson.teacher}</span>
                    </div>
                `;
                card.addEventListener("click", () => openLessonModal(lesson));
                lessonsList.appendChild(card);
            });
        }

        col.appendChild(lessonsList);
        container.appendChild(col);
    }
}

// Filter Logic
function applyFilters() {
    const allCards = document.querySelectorAll(".lesson-card, .col-lesson-card");

    allCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const subject = card.dataset.subject || card.querySelector(".card-title")?.textContent || "";
        const type = card.dataset.type || text;

        let matchesSearch = !currentFilter.search || text.includes(currentFilter.search);
        let matchesType = currentFilter.type === "all" || type.includes(currentFilter.type);
        let matchesSubject = currentFilter.subject === "all" || subject === currentFilter.subject;

        if (matchesSearch && matchesType && matchesSubject) {
            card.style.display = "flex";
            card.style.opacity = "1";
        } else {
            card.style.display = "none";
            card.style.opacity = "0";
        }
    });
}

// Modal View
function openLessonModal(lesson) {
    document.getElementById("modal-type").textContent = lesson.type;
    document.getElementById("modal-code").textContent = lesson.code;
    document.getElementById("modal-title").textContent = lesson.subject;
    document.getElementById("modal-time").textContent = `${lesson.startTime} - ${lesson.endTime}`;
    document.getElementById("modal-day").textContent = dayNames[lesson.day];
    document.getElementById("modal-room").textContent = lesson.room;
    document.getElementById("modal-teacher").textContent = lesson.teacher;

    document.getElementById("modal-backdrop").classList.add("active");
}

// Dynamic Footer Stats Calculation
function updateFooterStats() {
    const schedule = getActiveSchedule();
    const total = schedule.length;
    const lectures = schedule.filter(l => l.type === "Лекции").length;
    const practices = schedule.filter(l => l.type === "Практические занятия").length;

    document.getElementById("stat-total").textContent = total;
    document.getElementById("stat-lectures").textContent = lectures;
    document.getElementById("stat-practices").textContent = practices;
}

// Live Time & Class Tracker
function updateLiveTracker() {
    const now = new Date();
    
    // Format Current Time Text
    const daysArr = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const dayStr = daysArr[now.getDay()];
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("current-time-text").textContent = `${dayStr}, ${hours}:${mins}:${secs}`;

    // Calculate Active / Next Lesson
    let currentDayNum = now.getDay();
    if (currentDayNum === 0) currentDayNum = 7;

    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    let activeLesson = null;
    let nextLesson = null;

    const schedule = getActiveSchedule();
    const todayLessons = schedule
        .filter(l => l.day === currentDayNum)
        .sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime));

    for (let l of todayLessons) {
        const startMins = timeToMinutes(l.startTime);
        const endMins = timeToMinutes(l.endTime);

        if (currentMinutes >= startMins && currentMinutes <= endMins) {
            activeLesson = l;
        } else if (currentMinutes < startMins && !nextLesson) {
            nextLesson = l;
        }
    }

    // Update Banner DOM
    const currentContainer = document.getElementById("current-class-content");
    const nextContainer = document.getElementById("next-class-content");

    if (activeLesson) {
        currentContainer.innerHTML = `
            <div><strong>${activeLesson.subject}</strong></div>
            <div class="banner-meta"><i class="fa-solid fa-location-dot"></i> ${activeLesson.room} &bull; ${activeLesson.teacher} (${activeLesson.startTime} - ${activeLesson.endTime})</div>
        `;
    } else {
        currentContainer.innerHTML = `<span class="no-class">Сейчас нет активных пар</span>`;
    }

    if (nextLesson) {
        nextContainer.innerHTML = `
            <div><strong>${nextLesson.subject}</strong></div>
            <div class="banner-meta"><i class="fa-solid fa-clock"></i> В ${nextLesson.startTime} &bull; ${nextLesson.room}</div>
        `;
    } else {
        nextContainer.innerHTML = `<span class="no-class">Занятий больше нет на сегодня</span>`;
    }
}

function timeToMinutes(timeStr) {
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + m;
}
