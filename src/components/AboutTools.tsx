import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";

const AboutTools = () => {
  return (
    <div className="max-w-2xl overflow-x-scroll lg:mx-0 mx-auto">
      <span className="text-justify text-slate-900 font-semibold">
        These are some of the tools i use for my applications but not limited to
        these:
      </span>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-slate-800 underline">
              Languages
            </TableHead>
            <TableHead className="text-slate-800 underline">Styling</TableHead>
            <TableHead className="text-slate-800 underline">Database</TableHead>
            <TableHead className="text-right text-slate-800 underline">
              FrontEnd
            </TableHead>
            <TableHead className="text-right text-slate-800 underline">
              BackEnd
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Javascript</TableCell>
            <TableCell>CSS3</TableCell>
            <TableCell>SQL & NoSQL</TableCell>
            <TableCell className="text-right">ReactJS</TableCell>
            <TableCell className="text-right">NodeJS</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">PHP</TableCell>
            <TableCell>TailwindCSS</TableCell>
            <TableCell>MongoDB</TableCell>
            <TableCell className="text-right">NextJS</TableCell>
            <TableCell className="text-right">Express</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Python</TableCell>
            <TableCell>Styled Components</TableCell>
            <TableCell>MySQL</TableCell>
            <TableCell className="text-right">Angular</TableCell>
            <TableCell className="text-right">Postman</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">JQuery</TableCell>
            <TableCell>SASS and SCSS</TableCell>
            <TableCell>PostgrelSQL</TableCell>
            <TableCell className="text-right">React Redux</TableCell>
            <TableCell className="text-right">RestAPI</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium"></TableCell>
            <TableCell>Bootstrap</TableCell>
            <TableCell>Firebase</TableCell>
            <TableCell className="text-right">Contest API</TableCell>
            <TableCell className="text-right">NextJS Api route</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium"></TableCell>
            <TableCell>Material UI</TableCell>
            <TableCell>Redis</TableCell>
            <TableCell className="text-right"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default AboutTools;
