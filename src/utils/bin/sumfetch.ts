import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄                <b>Shecspi</b>
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄              ${config.name}
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓             <u><a href="${config.resume_url}" target="_blank">Моё резюме</a></u>
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓        <b>Где меня найти?</b>
▐▓                                 ▐▓         Профиль на <u><a href="${config.repo}" target="_blank">Github</a></u>
▐▓         > S H E C S P I         ▐▓       爵  Личный сайт <u><a href="${config.website}" target="_blank">shecspi.ru</a></u>
▐▓                                 ▐▓       爵  Дзен-канал "<u><a href="${config.dzen}" target="_blank">Россия наизнанку</a></u>"
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓       爵  Проект "<u><a href="${config.moi_goroda}" target="_blank">Мои города</a></u>"
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            <b>Как со мной связаться?</b>
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀

`;
};

export default sumfetch;
