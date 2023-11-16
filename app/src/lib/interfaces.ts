export interface workspaceFile {
	name: string;
	description: string;
	createdAt: Date;
	lastEdited: Date;
	blocklyWorkspace: undefined; //TODO Work on findind out the type of this variable.
}

export interface workspace {
	name: string;
	author: string; //? The OWNER of the workspace, it's here when we will add multiple people working on one workspace
	lastEdited: Date;
	createdAt: Date;
	files: Array<workspaceFile>;
}

export interface discodesConfig {
	version: number; //? The Version of the config file, so no compatibility errors happen.
	workspaces: Array<workspace>;
}
