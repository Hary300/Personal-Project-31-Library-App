export interface ChangeLoanStatusData {
  loan: Loan;
}

export interface Loan {
  id: number;
  userId: number;
  bookId: number;
  status: 'BORROWED' | 'RETURNED' | 'LATE';
  borrowedAt: string;
  dueAt: string;
  returnedAt: string | null;
}
