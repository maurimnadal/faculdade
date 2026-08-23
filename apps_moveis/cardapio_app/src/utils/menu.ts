import {
  endOfWeek,
  format,
  isSameDay,
  isWithinInterval,
  parseISO,
  startOfWeek
} from "date-fns";
import { ptBR } from "date-fns/locale";

import { Menu } from "../types/models";

const mealOrder = ["Café da Manhã", "Almoço", "Jantar", "Lanche"];

export function getCurrentWeekMenus(allMenus: Menu[], referenceDate = new Date()) {
  const today = referenceDate;
  const start = startOfWeek(today, { weekStartsOn: 1 });
  const end = endOfWeek(today, { weekStartsOn: 1 });

  return allMenus
    .filter((menu) => {
      const menuDate = parseISO(menu.data);
      return isWithinInterval(menuDate, { start, end });
    })
    .sort((a, b) => {
      const dateComparison = a.data.localeCompare(b.data);

      if (dateComparison !== 0) {
        return dateComparison;
      }

      return mealOrder.indexOf(a.tipoRefeicao) - mealOrder.indexOf(b.tipoRefeicao);
    });
}

export function isToday(menu: Menu, referenceDate = new Date()) {
  return isSameDay(parseISO(menu.data), referenceDate);
}

export function formatMenuDate(date: string) {
  return format(parseISO(date), "EEEE, dd/MM/yyyy", { locale: ptBR });
}

export function formatShareText(menu: Menu) {
  const items = menu.itens.map((item) => `- ${item}`).join("\n");

  return `Cardápio do Refeitório\n${menu.tipoRefeicao}\n${formatMenuDate(menu.data)}\n\n${items}`;
}
