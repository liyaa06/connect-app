 import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function RolesPage(){
    return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
         <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
         <TableHead className="text-right">Amount</TableHead>
         </TableRow>
        </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    );
}

// Penjelasan :

// 1. Komponen ini adalah "Server Component" karena tidak ada interaksi pengguna.
// 2. Kita menggunakan komponen `Table` dan sub-komponen seperti `TableHeader
//    dan `TableBody` untuk membuat tabel.
// 3. Kita menggunakan Tailwind CSS untuk styling, seperti `w-[100px]` untuk lebar kolom.
// 4. Tidak ada penggunaan state atau efek, sehingga tidak perlu `'use client'`.