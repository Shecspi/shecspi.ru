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
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
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

Привет!

Введите '<i>help</i>', чтобы увидеть список доступных комманд.
Введите '<i>sumfetch</i>', чтобы увидеть краткую сводку обо мне.
Введите '<i>repo</i>' или нажмите <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">здесь</a></u>, чтобы перейти в мой Github-репозиторий.
`;
};
