// src/extension.ts
import * as vscode from 'vscode';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// This function runs when your extension is activated
export function activate(context: vscode.ExtensionContext) {
    console.log('Omnipkg extension is now active!');

    // Command 1: Install a package
    let installCmd = vscode.commands.registerCommand('omnipkg.install', async () => {
        // Ask user for package name
        const packageName = await vscode.window.showInputBox({
            placeHolder: 'requests==2.28.0 or numpy>=1.20',
            prompt: 'Enter package name (with optional version)'
        });

        if (!packageName) {
            return; // User cancelled
        }

        // Create a terminal and run the command
        const terminal = vscode.window.createTerminal('Omnipkg Install');
        terminal.show();
        terminal.sendText(`omnipkg install ${packageName}`);
    });

    // Command 2: Switch Python version
    let switchCmd = vscode.commands.registerCommand('omnipkg.switch', async () => {
        try {
            // First, get list of available Python versions
            const { stdout } = await execAsync('omnipkg list python');
            
            // Parse the output to extract version numbers
            const versions: string[] = [];
            const lines = stdout.split('\n');
            for (const line of lines) {
                const match = line.match(/Python (\d+\.\d+)/);
                if (match) {
                    versions.push(match[1]);
                }
            }

            if (versions.length === 0) {
                vscode.window.showWarningMessage('No Python versions found. Run "omnipkg python adopt <version>" first.');
                return;
            }

            // Show quick pick menu
            const selected = await vscode.window.showQuickPick(versions, {
                placeHolder: 'Select Python version to switch to'
            });

            if (!selected) {
                return; // User cancelled
            }

            // Run the swap command
            const terminal = vscode.window.createTerminal('Omnipkg Switch');
            terminal.show();
            terminal.sendText(`omnipkg swap python ${selected}`);

        } catch (error: any) {
            vscode.window.showErrorMessage(`Failed to get Python versions: ${error.message}`);
        }
    });

    // Command 3: List installed packages
    let listCmd = vscode.commands.registerCommand('omnipkg.list', async () => {
        const terminal = vscode.window.createTerminal('Omnipkg List');
        terminal.show();
        terminal.sendText('omnipkg list');
    });

    // Command 4: Show package info
    let infoCmd = vscode.commands.registerCommand('omnipkg.info', async () => {
        const packageName = await vscode.window.showInputBox({
            placeHolder: 'requests or tensorflow==2.13.0',
            prompt: 'Enter package name to inspect'
        });

        if (!packageName) {
            return;
        }

        const terminal = vscode.window.createTerminal('Omnipkg Info');
        terminal.show();
        terminal.sendText(`omnipkg info ${packageName}`);
    });

    // Command 5: Uninstall package
    let uninstallCmd = vscode.commands.registerCommand('omnipkg.uninstall', async () => {
        const packageName = await vscode.window.showInputBox({
            placeHolder: 'requests or numpy',
            prompt: 'Enter package name to uninstall'
        });

        if (!packageName) {
            return;
        }

        const terminal = vscode.window.createTerminal('Omnipkg Uninstall');
        terminal.show();
        terminal.sendText(`omnipkg uninstall ${packageName}`);
    });

    // Command 6: Environment doctor
    let doctorCmd = vscode.commands.registerCommand('omnipkg.doctor', async () => {
        const terminal = vscode.window.createTerminal('Omnipkg Doctor');
        terminal.show();
        terminal.sendText('omnipkg doctor');
    });

    // Command 7: Heal environment
    let healCmd = vscode.commands.registerCommand('omnipkg.heal', async () => {
        const terminal = vscode.window.createTerminal('Omnipkg Heal');
        terminal.show();
        terminal.sendText('omnipkg heal');
    });

    // Command 8: Run demo
    let demoCmd = vscode.commands.registerCommand('omnipkg.demo', async () => {
        const terminal = vscode.window.createTerminal('Omnipkg Demo');
        terminal.show();
        terminal.sendText('omnipkg demo');
    });

    // Command 9: Adopt Python version
    let adoptCmd = vscode.commands.registerCommand('omnipkg.adopt', async () => {
        const version = await vscode.window.showInputBox({
            placeHolder: '3.11 or 3.10',
            prompt: 'Enter Python version to adopt'
        });

        if (!version) {
            return;
        }

        const terminal = vscode.window.createTerminal('Omnipkg Adopt');
        terminal.show();
        terminal.sendText(`omnipkg python adopt ${version}`);
    });

    // Command 10: Status
    let statusCmd = vscode.commands.registerCommand('omnipkg.status', async () => {
        const terminal = vscode.window.createTerminal('Omnipkg Status');
        terminal.show();
        terminal.sendText('omnipkg status');
    });

    // Register all commands
    context.subscriptions.push(
        installCmd,
        switchCmd,
        listCmd,
        infoCmd,
        uninstallCmd,
        doctorCmd,
        healCmd,
        demoCmd,
        adoptCmd,
        statusCmd
    );
}

// This function runs when your extension is deactivated
export function deactivate() {
    console.log('Omnipkg extension deactivated');
}