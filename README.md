# Omnipkg VS Code Extension

The official VS Code extension for **Omnipkg** - The Ultimate Python Dependency Resolver that eliminates dependency hell.

## 🚀 Features

- **Install Packages**: Smart package installation with automatic conflict resolution
- **Switch Python Versions**: Runtime version switching without environment restart
- **Environment Health**: Diagnose and heal corrupted environments
- **Package Explorer**: Interactive package information viewer
- **Multi-version Support**: Run multiple versions of the same package simultaneously

## 📦 Requirements

You must have **omnipkg** installed in your Python environment:

```bash
pip install omnipkg
```

Or if you have it already:

```bash
omnipkg upgrade
```

## 🎯 Usage

Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and type `Omnipkg` to see all available commands:

### Core Commands

- **Omnipkg: Install Package** - Install a Python package with version
  - Example: `requests==2.28.0` or `numpy>=1.20`
- **Omnipkg: Uninstall Package** - Remove packages intelligently
- **Omnipkg: List Installed Packages** - View all installed packages
- **Omnipkg: Show Package Info** - Interactive package explorer

### Python Version Management

- **Omnipkg: Switch Python Version** - Switch between managed Python versions
- **Omnipkg: Adopt Python Version** - Add a Python version to omnipkg's management
  - Example: `3.11` or `3.10`

### Environment Health

- **Omnipkg: Run Environment Doctor** - Diagnose environment issues
- **Omnipkg: Heal Environment** - Automatically fix dependency conflicts
- **Omnipkg: Show Status** - Environment health dashboard

### Demos

- **Omnipkg: Run Demo** - See omnipkg's magic in action

## 🔥 Key Features

### Smart Conflict Resolution
Omnipkg automatically detects and resolves dependency conflicts, creating isolated "bubbles" for incompatible packages.

### Runtime Version Switching
Switch Python versions or package versions mid-execution without restarting your environment.

### Multi-version Coexistence
Run `numpy==1.24.3` and `numpy==1.26.4` in the same project - impossible with traditional tools!

### Automatic Environment Healing
When you run a script with missing or conflicting dependencies, omnipkg automatically fixes it.

## 📖 Examples

### Installing Multiple Versions
```
Omnipkg: Install Package
> uv==0.7.13

Omnipkg: Install Package
> uv==0.7.14
```

Both versions coexist peacefully!

### Switching Python Versions
```
Omnipkg: Switch Python Version
> 3.11
```

Your entire environment switches to Python 3.11 instantly.

### Healing a Broken Environment
```
Omnipkg: Run Environment Doctor
```

Omnipkg will scan for conflicts and offer to fix them automatically.

## 🛠️ Configuration

Omnipkg uses your existing omnipkg configuration. To configure it, run in your terminal:

```bash
# Set language
omnipkg config set language es

# Set install strategy
omnipkg config set install_strategy latest-active
```

## 🐛 Known Issues

- Extension requires omnipkg to be installed and available in your PATH
- Some commands require specific Python versions (the extension will notify you)

## 📝 Release Notes

### 0.0.1

Initial release with core omnipkg functionality:
- Package installation and removal
- Python version management
- Environment health checks
- Interactive package explorer

## 🔗 Links

- [Omnipkg GitHub](https://github.com/1minds3t/omnipkg)
- [Report Issues](https://github.com/1minds3t/omnipkg/issues)
- [Documentation](https://github.com/1minds3t/omnipkg#readme)

## 📄 License

This extension is part of the omnipkg project, which is dual-licensed:

### Open Source (AGPL-3.0)
- ✅ Free for open-source projects
- ✅ Must disclose source code for SaaS/network usage
- ✅ Community support

### Commercial License
- ✅ For proprietary/closed-source applications
- ✅ No source code disclosure required
- ✅ Priority support available

For commercial licensing inquiries, contact: **omnipkg@proton.me**

Full license details: [LICENSE](https://github.com/1minds3t/omnipkg/blob/main/LICENSE)

---

**Enjoy dependency-free Python development!** 🎉