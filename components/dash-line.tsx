// Dash - small horizontal line
import { cn } from '@/lib/utils';
import React from 'react'

interface DashProps {
  className?: string;
}

const Dash: React.FC<DashProps> = ({ 
  className 
}) => {
  return (
    <div className={cn('bg-accent h-[5px] w-[70px] mt-10', className)} />
  )
}

export default Dash