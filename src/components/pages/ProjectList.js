import React from 'react';
import uuid from 'uuid/v4';

class ProjectList extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      projects: [
        {
          id: uuid(),
          title: 'reduxの設計比較記事を書く',
          body: 'テストテストテスト',
        },
        {
          id: uuid(),
          title: 'create-react-appの設定記事書く',
          body: 'テストテスト',
        },
      ],
    };

    this.changeInput = this.changeInput.bind(this);
    this.createNewProject = this.createNewProject.bind(this);
    this.onKeyPressInput = this.onKeyPressInput.bind(this);
  }

  onKeyPressInput(e) {
    const enterKeyCode = 13;
    if (e.keyCode !== enterKeyCode) return;

    this.createNewProject();
  }

  changeInput(e) {
    this.setState({
      input: e.target.value,
    });
  }

  deleteProject(id) {
    this.setState({
      projects: this.state.projects.filter(item => item.id !== id),
    });
  }

  createNewProject() {
    if (!this.state.input) return;

    this.setState({
      input: '',
      projects: [
        ...this.state.projects,
        {
          id: uuid(),
          title: this.state.input,
          body: 'まだ入力フォームがない件',
        },
      ],
    });
  }

  render() {
    return (
      <div>
        <div>Project一覧</div>
        <div>
          <input
            value={this.state.input}
            onChange={this.changeInput}
            onKeyDown={this.onKeyPressInput}
          />
          <button
            style={{
              top: '5px',
              right: '5px',
              width: '40px',
              height: '20px',
              // lineHeight: '0em',
            }}
            onClick={this.createNewProject}
          >
            追加
          </button>
        </div>
        <ul>
          {this.state.projects.map(project => (
            <li
              key={project.id}
              style={{
                listStyle: 'none',
                margin: '3px 5px',
                backgroundColor: '#ddd',
                position: 'relative',
                textAlign: 'left',
              }}
            >
              <span
                style={{
                  margin: '0 0 0 5px',
                }}
              >
                {project.title}
              </span>
              <button
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  width: '20px',
                  height: '20px',
                  lineHeight: '0em',
                }}
                onClick={() => this.deleteProject(project.id)}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProjectList;
