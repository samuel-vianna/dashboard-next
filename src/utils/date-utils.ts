import { Frequency, DayOfWeek } from '@/types/scale'

export const DAYS_OF_WEEK: { value: DayOfWeek; label: string }[] = [
  { value: 'monday', label: 'Segunda-feira' },
  { value: 'tuesday', label: 'Terça-feira' },
  { value: 'wednesday', label: 'Quarta-feira' },
  { value: 'thursday', label: 'Quinta-feira' },
  { value: 'friday', label: 'Sexta-feira' },
  { value: 'saturday', label: 'Sábado' },
  { value: 'sunday', label: 'Domingo' }
]

export const FREQUENCIES: { value: Frequency; label: string }[] = [
  { value: 'weekly', label: 'Semanal' },
  { value: 'biweekly', label: 'Quinzenal' },
  { value: 'monthly', label: 'Mensal' }
]

export function getDayOfWeek(date: Date): DayOfWeek {
  const days: DayOfWeek[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  return days[date.getDay()]
}

export function generateAvailableDates(
  startDate: Date,
  endDate: Date | undefined,
  frequency: Frequency,
  availableDays: DayOfWeek[]
): Date[] {
  const dates: Date[] = []
  const current = new Date(startDate)
  const end = endDate || new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 year from now if no end date

  while (current <= end) {
    const dayOfWeek = getDayOfWeek(current)
    
    if (availableDays.includes(dayOfWeek)) {
      dates.push(new Date(current))
    }

    // Move to next period based on frequency
    switch (frequency) {
      case 'weekly':
        current.setDate(current.getDate() + 7)
        break
      case 'biweekly':
        current.setDate(current.getDate() + 14)
        break
      case 'monthly':
        current.setMonth(current.getMonth() + 1)
        break
    }
  }

  return dates
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
}

export function formatDateWithDay(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
}

export function isDateInRange(date: Date, startDate: Date, endDate?: Date): boolean {
  if (endDate) {
    return date >= startDate && date <= endDate
  }
  return date >= startDate
}

export function getDayLabel(day: DayOfWeek): string {
  return DAYS_OF_WEEK.find(d => d.value === day)?.label || day
}

export function getFrequencyLabel(frequency: Frequency): string {
  return FREQUENCIES.find(f => f.value === frequency)?.label || frequency
}

