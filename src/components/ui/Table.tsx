import React from 'react';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

export function Table({ children, className = '', ...props }: TableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-border">
      <table
        className={`w-full text-left text-sm ${className}`}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

export interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export function TableHeader({
  children,
  className = '',
  ...props
}: TableHeaderProps) {
  return (
    <thead
      className={`bg-muted text-muted-foreground text-xs uppercase tracking-wider ${className}`}
      {...props}
    >
      {children}
    </thead>
  );
}

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export function TableBody({
  children,
  className = '',
  ...props
}: TableBodyProps) {
  return (
    <tbody
      className={`divide-y divide-border bg-white ${className}`}
      {...props}
    >
      {children}
    </tbody>
  );
}

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

export function TableRow({
  children,
  className = '',
  ...props
}: TableRowProps) {
  return (
    <tr
      className={`transition-colors hover:bg-brand-cream-light ${className}`}
      {...props}
    >
      {children}
    </tr>
  );
}

export interface TableHeadProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export function TableHead({
  children,
  className = '',
  ...props
}: TableHeadProps) {
  return (
    <th
      className={`px-4 py-3 font-semibold ${className}`}
      {...props}
    >
      {children}
    </th>
  );
}

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export function TableCell({
  children,
  className = '',
  ...props
}: TableCellProps) {
  return (
    <td
      className={`px-4 py-3 text-foreground ${className}`}
      {...props}
    >
      {children}
    </td>
  );
}
