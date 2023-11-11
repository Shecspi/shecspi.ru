// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Привет! Ниже представлен список всех доступных команд.
\n${c}\n
<i>[tab]</i>: автодополнение команд
<i>[ctrl+l]</i> / <i>clear</i>: очистить терминал\n
'<i>sumfetch</i>': показать краткую сводку обо мне
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Открытие Github репозитория...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Привет! Меня зовут ${config.name}. 
Добро пожаловать на мою персональную страничку.

Я - Junior Python-разработчик без коммерческого опыта, но программированием как хобби я увлекаюсь более 15 лет.

<b>Мои ключевые проекты:</b>
<b>2022 - ...</b>    Моим текущим основным проектом является сайт "<u><a class="text-light-blue dark:text-dark-blue underline" href="https://moi-goroda.ru" target="_blank">Мои города</a></u>", разработку которого я начал в октябре 2022 года.
              Он позволяет путешественникам по России отмечать посещённые города и регионы, вести их учёт и просматривать на карте.
              Причиной создания этого сайта послужило отсутствие на рынке аналогичных качественных решений.
              На данный момент у сайта около 150 пользователей, которые суммарно посетили более 6.500 городов.

<b>2023</b>          Разработал программу для массового переименования фотографий на основе EXIF-данных. 

<b>2020</b>          Начало изучения Python и разработка игры-платформера <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/Shecspi/Running-Alien" target="_blank">Running Alien</a></u>, написанной на Python с использованием библиотекии PyGame.

<b>2009 - 2010</b>   В рамках своего блога - <u><a class="text-light-blue dark:text-dark-blue underline" href="http://shecspi.blogspot.com" target="_blank">http://shecspi.blogspot.com</a></u> я подготовил единственный в русскоязычном сегменте интернета
              обучающий курс по библиотеке для создания графического интерфейса на языке PHP - PHP-GTK2.

<b>2009 - 2010</b>   Разработал двухпанельный файловый менеджер с графическим интерфейсом <u><a class="text-light-blue dark:text-dark-blue underline" href="https://code.google.com/archive/p/flight-files/" target="_blank">FlightFiles</a></u>, написанный на языке PHP с использованием библиотеки PHP-GTK2

Больше инеформации обо мне:
'<i>sumfetch</i>' - краткая сводка
'<i>resume</i>' - моё резюме`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Открытие resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Открытие mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Открытие Github...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `drwxr-xr-x   root  root   4096   00:01   большая
drwxr-xr-x   root  root    680   07:01   куча
lrwxrwxrwx   root  root      0   22:33   ненастоящих
drwxrwxrwt   root  root   4096   16:04   директорий`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `К сожалению, это придожение не умеет переходить по папкам.
Это всего-лишь сайт-открытка, а не реальная операционная система :)`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `Уххх... Ты всё ещё используешь '<i>vi</i>'? Уже ведь давно вышел '<i>vim</i>' Советую попробовать его.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'<i>vim</i>' тоже уже не в моде. Попробуй '<i>nvim</i>'.`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'<i>nvim</i>' хорош, но его нужно долго настраивать под себя.\nСоветую попробовать готовую сборку '<i>nvchad</i>'.`;
};

export const nvchad = async (args?: string[]): Promise<string> => {
  return `Я рад, что ты дошёл до сюда))\n'<i>nvchad</i>' крутая сборка, я её использую как основной текстовый редактор.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `Отказано в доступе... `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 ██████████                                                          
░░███░░░░░█                                                          
 ░███  █ ░   ███████  ██████  ████████                               
 ░██████    ███░░███ ███░░███░░███░░███                              
 ░███░░█   ░███ ░███░███ ░███ ░███ ░░░                               
 ░███ ░   █░███ ░███░███ ░███ ░███                                   
 ██████████░░███████░░██████  █████                                  
░░░░░░░░░░  ░░░░░███ ░░░░░░  ░░░░░                                   
            ███ ░███                                                 
           ░░██████                                                  
            ░░░░░░                                                   
 █████   █████                        ███  ████                      
░░███   ░░███                        ░░░  ░░███                      
 ░███    ░███   ██████   █████ █████ ████  ░███   ██████  █████ █████
 ░███    ░███  ░░░░░███ ░░███ ░░███ ░░███  ░███  ███░░███░░███ ░░███ 
 ░░███   ███    ███████  ░███  ░███  ░███  ░███ ░███ ░███ ░███  ░███ 
  ░░░█████░    ███░░███  ░░███ ███   ░███  ░███ ░███ ░███ ░░███ ███  
    ░░███     ░░████████  ░░█████    █████ █████░░██████   ░░█████   
     ░░░       ░░░░░░░░    ░░░░░    ░░░░░ ░░░░░  ░░░░░░     ░░░░░    

Введите '<i>help</i>', чтобы увидеть список доступных комманд.
Введите '<i>sumfetch</i>', чтобы увидеть краткую сводку обо мне.
Введите '<i>about</i>', чтобы посмотреть подробную информацию обо мне.
`;
};
