"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Card className="bg-slate-900 border-slate-800/80 overflow-hidden group hover:border-emerald-500/30 transition-all duration-300 flex flex-col h-full shadow-2xl">
      
      <div className="h-48 bg-slate-950 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
        />
      </div>

    
      <CardHeader className="pb-3">
        <CardTitle className="text-white group-hover:text-emerald-400 transition-colors text-xl font-bold">
          {project.name}
        </CardTitle>
        <CardDescription className="flex flex-wrap gap-1.5 pt-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-[10px] bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800"
            >
              {tech}
            </Badge>
          ))}
        </CardDescription>
      </CardHeader>

    
      <CardContent className="flex-grow">
        <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
      </CardContent>

    
      <CardFooter className="pt-0">
        <Button
          asChild
          className="w-full bg-slate-950 hover:bg-emerald-500 text-slate-300 hover:text-slate-950 font-medium py-2.5 rounded-xl transition-all duration-300 text-sm border border-slate-800 hover:border-transparent gap-2 cursor-pointer"
        >
          <Link href={`/projects/${project.slug}`}>
            View Details <ArrowUpRight size={16} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}