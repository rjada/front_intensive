

/* В продолжение прошлого задания вам нужно нужно создать 4 новых класса:

- Company - класс описывающий IT компанию. Состоит из:
1. Св-ва:
- companyName
- currentProjects - текущий пулл проектов. Массив экземпляров класса Project
- completedProjects - пулл завершенных проектов. Массив экземпляров класса Project
- staff - весь пулл сотрудников компании. Это объект, у которого есть поля Developers, Managers. В этих полях лежат массивы экземпляров аналогичных классов.
2. Методы:

- addNewCompanyMember() - позволяет нанять нового сотрудника. В результате метода у выбранного сотрудника

должно смениться имя компании.
- addProject() - позволяет добавить проект в пулл текущих.
- getMembersQuantity() - позволяет получить кол-во сотрудников, работающих в данной комании

- Project - класс описывающий проект компании. На проекте может быть только 1 менеджер! Каждый сотрудник может работать только над одним проектом! Состоит из:
- Project Name
- minQualification - минимальная квалификация сотрудника, для работы на данном проекте.
- Team - команда проекта. Объект, типа {Managers: [], Developers: {Frontend : [], Backend: []}}. В св-ва этого объекта указан массив аналогичных классов.

Метод:
- completeProject() - позволяет закончить проект. В результате выполнения функции проект из currentProjects перемещается в finishedProjects. У команды данного проекта должно увеличиться кол-во завершенных проектов.
- addNewProjectMember() - Метод внутри которого вызывается проверка менеджера на то, подходит ли сотрудник проекту. Если подходит, то команда расширяется, иначе нет.


- Backend Developer - Класс, который наследуется от класса Employee. Имеет новые св-ва:
- stack - Массив в котором указаны технологии, которыми владеет разработчик.
- developerSide - 'backend'
- projectQuantity - Число завершенных проектов.
- expandStack() - разработчик может увеличить стек технологий.

- Frontend Developer - Класс, который наследуется от класса Employee. Имеет новые св-ва:
- stack - Массив в котором указаны технологии, которыми владеет разработчик.
- developerSide - 'frontend'
- projectQuantity - Число завершенных проектов.
- expandStack() - разработчик может увеличить стек технологий.

-Manager - Класс, который наследуется от класса Employee. Имеет новые св-ва:
- projectQuantity - Число завершенных проектов.

- checkMember(minQuantity) - менеджер проверяет, удовлетворяет ли сотрудник условиям проекта. Сотрудник, состоящий в другой компании не может работать над проектом другой компании.

*/

import { Employee } from "./classes";

/* Св-ва и методы класса
companyName - string
currentProjects - Массив экземпляров класса Project
completedProjects -  Массив экземпляров класса Project
staff - {
    developers :  {
    frontend : массив содержащий экземпляры класса FrontendDeveloper
    backend : массив содержащий экземпляры класса DackendDeveloper
    },
    managers: массив содержащий экземпляры класса Manager
}

addNewCompanyMember(Developer/Manager) - в кач-ве аргумента принимает экземляр класса FrontendDeveloper, Backend Developer или Manager
addProject(Project) - в кач-ве аргумента принимает экземляр класса Project
getMembersQuantity()
*/
export class Company {

	constructor (companyName) {
		this.companyName = companyName;
		this.currentProjects = [];
		this.completeProjects = [];
		this.staff = {};
	}

	addNewCompanyMember(member) {
		if (member === 1)
			this.staff.managers.push(member);
		else if (member === 2)
			this.staff.frontend.push(member);
		else if (member === 3)
		this.staff.backend.push(member);
	}
	
	addProject(project) {
		this.currentProjects.push(project);
	}

	getMemberQuantity() {
		//
	}
}


 /*
- projectName - string
- minQualification -number
- Team -  {
    manager : экземпляр класса Manager
    developers: {
    frontend : массив содержащий экземпляры класса FrontendDeveloper
    backend : массив содержащий экземпляры класса DackendDeveloper
    }
}


completeProject()
addNewProjectMember(Developer/Manager) - Метод внутри которого вызывается проверка менеджера на то, подходит ли сотрудник проекту. Если подходит, то команда расширяется, иначе нет.
*/

export class Project {

	constructor (name, minQuantification, manager, fronrenders, backenders) {
		this.name = name;
		this.minQuantification = minQuantification;
		this.team = {}; //object
		this.team.manager = manager;
		this.team.fronrenders = fronrenders; //array
		this.team.backenders = backenders; //array
	}

	completeProject() {
		//this.status = 'complete';
	}

	addNewProjectMember(member) {
		if (member === 1) {
			this.team.manager = member
		} else if (member === 2) {
			this.team.fronrenders.push(member);
		} else {
			this.team.backenders.push(member);
		}
	}
}
/*
projectQuantity - number
checkMember(minQuantity) - в качестве аргумента принимается строка ('L1'/'L2'/'L3'/'L4')
*/
export class Manager extends Employee {
	constructor (name, grade, hardSkills, company, projectQuantity) {
		super(name, grade, hardSkills, company);
		this.projectQuantity = projectQuantity;
	}

	checkMember(minQuantity, member) {
		if (member.projectQuantity >= minQuantity)
			return true;
		else
			return false;
	}
}

/*
stack - массив строк
- developerSide - строка ('frontend')
- projectQuantity - number
expandStack(newTech) - в кач-ве аргумента принимает строку
*/

export class FrontendDeveloper extends Employee {
	constructor (name, grade, hardSkills, company, stack, number) {
		super(name, grade, hardSkills, company);
		this.stack = stack;
		this.#developerSide = 'frontend';
		this.projectQuantity = number;
	}

	expandStack(newTech) {
		this.stack.pop(newTech);
	}
}

export class BackendDeveloper extends Employee {

	constructor (name, grade, hardSkills, company, stack, number) {
		super(name, grade, hardSkills, company);
		this.stack = stack;
		this.#developerSide = 'backend';
		this.projectQuantity = number;
	}

	expandStack(newTech) {
		this.stack.pop(newTech);
	}
}
