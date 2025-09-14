# alx-frontend-javascript

This repository contains the ALX Frontend JavaScript curriculum, focusing on advanced TypeScript concepts and object-oriented programming.

## Project: 0x04-TypeScript

This project covers advanced TypeScript features including interfaces, classes, inheritance, type predicates, namespaces, and declaration merging.

### Tasks Included in this Repository

#### Task 1: Let's build a Teacher interface
- Teacher interface with readonly properties
- Interface extension (Directors extends Teacher)
- Function interfaces and type safety
- Class implementation with constructor interfaces

**Features:**
- Readonly properties for firstName and lastName
- Optional properties with yearsOfExperience
- Index signatures for dynamic properties
- Interface inheritance

**Files:**
- `task_1/js/main.ts` - Complete implementation with examples
- `task_1/package.json`, `task_1/tsconfig.json`, `task_1/webpack.config.js`

#### Task 2: Extending the Teacher class (Advanced Types)
- DirectorInterface and TeacherInterface definitions
- Class implementation and inheritance
- Union types and type guards
- String literal types and type predicates

**Features:**
- Interface segregation principle
- Type predicate functions (`isDirector`)
- Union types for function parameters
- String literal types for Subjects

**Files:**
- `task_2/js/main.ts` - Advanced types implementation
- `task_2/package.json`, `task_2/tsconfig.json`, `task_2/webpack.config.js`

#### Task 4: Namespace & Declaration merging
- TypeScript namespaces for code organization
- Declaration merging for interface extension
- Reference directives for module inclusion
- Subject-specific classes with teacher availability

**Features:**
- Subjects namespace organization
- Declaration merging for Teacher interface
- Multiple subject classes (Cpp, React, Java)
- Teacher experience tracking

**Files:**
- `task_4/js/main.ts` - Main application with namespace usage
- `task_4/js/subjects/Teacher.ts` - Base Teacher interface
- `task_4/js/subjects/Subject.ts` - Base Subject class
- `task_4/js/subjects/Cpp.ts` - C++ subject implementation
- `task_4/js/subjects/React.ts` - React subject implementation
- `task_4/js/subjects/Java.ts` - Java subject implementation
- `task_4/package.json`, `task_4/tsconfig.json`

## Directory Structure

```
alx-frontend-javascript/
├── README.md
└── 0x04-TypeScript/
    ├── task_1/
    │   ├── package.json
    │   ├── tsconfig.json
    │   ├── webpack.config.js
    │   ├── index.html
    │   └── js/
    │       └── main.ts
    ├── task_2/
    │   ├── package.json
    │   ├── tsconfig.json
    │   ├── webpack.config.js
    │   ├── index.html
    │   └── js/
    │       └── main.ts
    └── task_4/
        ├── package.json
        ├── tsconfig.json
        └── js/
            ├── main.ts
            └── subjects/
                ├── Teacher.ts
                ├── Subject.ts
                ├── Cpp.ts
                ├── React.ts
                └── Java.ts
```

## Installation and Usage

Each task directory is self-contained with its own configuration.

For tasks 1 and 2 (with webpack):
```bash
cd 0x04-TypeScript/task_1  # or task_2
npm install
npm run build
```

For task 4 (namespace-based):
```bash
cd 0x04-TypeScript/task_4
npm install
# Compile with TypeScript compiler
npx tsc
```

## Learning Objectives

By completing this project, you will understand:
- Advanced interface design with readonly properties
- Class inheritance and interface implementation
- Type predicates and type guards
- Union types and string literal types
- TypeScript namespaces for code organization
- Declaration merging for interface extension
- Reference directives for module management

## Key Concepts Demonstrated

### Task 1: Interface Design
- Readonly properties for immutability
- Optional properties with `?`
- Index signatures for dynamic properties `[key: string]: any`
- Interface inheritance with `extends`

### Task 2: Advanced Types
- Interface segregation (separate interfaces for different roles)
- Type predicates: `employee is Director`
- Union types: `number | string`
- String literal types: `"Math" | "History"`

### Task 4: Namespaces & Declaration Merging
- Namespace organization: `namespace Subjects`
- Declaration merging to extend interfaces
- Reference directives: `/// <reference path="..." />`
- Module composition and teacher assignment

## Requirements

- TypeScript compiler should show no warnings or errors
- All variables should use TypeScript when possible
- Proper use of interfaces, classes, and type annotations
- Code follows TypeScript best practices

## Technologies Used

- **TypeScript 3.6.4** - Primary language
- **Webpack 4.41.5** - Module bundler (tasks 1 & 2)
- **ESLint** - Code quality with TypeScript rules
- **HTML5/CSS3** - Basic DOM structure

## Example Usage

### Task 1: Teacher Interface
```typescript
const teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  contract: false  // Dynamic property
};
```

### Task 2: Advanced Types
```typescript
const employee = createEmployee(200); // Returns Teacher
console.log(isDirector(employee)); // false
console.log(executeWork(employee)); // "Getting to work"
```

### Task 4: Namespaces
```typescript
const cpp = new Subjects.Cpp();
cpp.setTeacher(cTeacher);
console.log(cpp.getAvailableTeacher()); // "Available Teacher: John"
```

## Author

ALX Frontend JavaScript Curriculum
