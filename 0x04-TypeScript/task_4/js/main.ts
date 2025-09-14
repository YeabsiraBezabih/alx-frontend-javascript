// TypeScript namespace-based implementation
namespace Subjects {
  // Teacher interface
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  // Subject base class
  export class Subject {
    teacher: Teacher | undefined;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }

  // Declaration merging for experience properties
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // Cpp class
  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }

  // Java class
  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }

  // React class
  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }

  // Exported constants and teacher
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  export const cTeacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
  };

  // Main execution
  console.log("C++");
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  console.log("Java");
  java.setTeacher(cTeacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  console.log("React");
  react.setTeacher(cTeacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}
