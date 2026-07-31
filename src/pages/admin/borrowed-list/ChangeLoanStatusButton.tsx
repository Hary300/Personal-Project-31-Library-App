import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useChangeLoanStatus } from '@/features/admin/hooks/useChangeLoanStatus';
import { Controller, useForm } from 'react-hook-form';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { ChangeLoanStatusPayload } from '@/features/admin/service/loanAdmin.service';
import { useState } from 'react';

type LoanStatus = 'BORROWED' | 'RETURNED' | 'LATE';
interface StatusForm {
  loanStatus: LoanStatus;
}

interface ChangeLoanStatusButtonProps {
  loanId: number;
  dueAt: string;
  loanStatus: LoanStatus;
}
const ChangeLoanStatusButton = ({
  loanId,
  dueAt,
  loanStatus,
}: ChangeLoanStatusButtonProps) => {
  const { mutate, isPending } = useChangeLoanStatus();
  const [openDialog, setOpenDialog] = useState(false);
  const { control, handleSubmit } = useForm<StatusForm>({
    defaultValues: {
      loanStatus: loanStatus,
    },
  });

  const onSubmit = (data: StatusForm) => {
    const payload: ChangeLoanStatusPayload = {
      status: data.loanStatus,
      loanId: loanId,
      dueAt: dueAt,
    };
    console.log(payload);
    mutate(payload, {
      onSuccess: () => {
        setOpenDialog(false);
      },
    });
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <div className='w-full sm:max-w-50'>
          <Button variant='outline' className='w-full'>
            Change Status
          </Button>
        </div>
      </DialogTrigger>

      <DialogContent className='sm:max-w-100 pt-6'>
        <form
          onSubmit={handleSubmit(onSubmit, (error) => {
            console.log(error);
          })}
          className='flex flex-col gap-4'
        >
          <DialogHeader className='px-4'>
            <DialogTitle className='text-lg font-bold'>
              Select Status
            </DialogTitle>
          </DialogHeader>
          <Controller
            name='loanStatus'
            control={control}
            render={({ field }) => (
              <RadioGroup
                value={field.value}
                onValueChange={(value) => field.onChange(value as LoanStatus)}
                className=' flex justify-between w-full px-4'
              >
                <div className='flex items-center gap-3'>
                  <RadioGroupItem value='BORROWED' id='r1' />
                  <label htmlFor='r1'>Active</label>
                </div>
                <div className='flex items-center gap-3'>
                  <RadioGroupItem value='RETURNED' id='r2' />
                  <label htmlFor='r2'>Returned</label>
                </div>
                <div className='flex items-center gap-3'>
                  <RadioGroupItem value='LATE' id='r3' />
                  <label htmlFor='r3'>Overdue</label>
                </div>
              </RadioGroup>
            )}
          />
          <DialogFooter>
            <div className='flex w-full gap-4'>
              <Button
                type='button'
                variant='outline'
                className='flex-1'
                onClick={() => setOpenDialog(false)}
              >
                Cancel
              </Button>
              <Button type='submit' className='flex-1' disabled={isPending}>
                {isPending ? 'Saving...' : 'Save changes'}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeLoanStatusButton;
