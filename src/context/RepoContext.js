import React, { useReducer } from 'react';

const RepoContext = React.createContext();

const initialState = {
  repos: null,
  reposStar: [],
  reporsWatch: [],
  repo: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_STAR':
      return {
        ...state, repos: state.repos.map((repo) => repo.id === action.payload ?
          { ...repo, stargazers_count: repo.stargazers_count + 1, isStar: true } : repo),
        repo: { ...state.repo, stargazers_count: state.repo.stargazers_count + 1, isStar: true },
      };
    case 'DECREMENT_STAR':
      return {
        ...state, repos: state.repos.map((repo) => repo.id === action.payload ?
          { ...repo, stargazers_count: repo.stargazers_count - 1, isStar: false } : repo),
        repo: { ...state.repo, stargazers_count: state.repo.stargazers_count - 1, isStar: false },
      };
    case 'INCREMENT_WATCHER':
      return {
        ...state, repos: state.repos.map((repo) => repo.id === action.payload ?
          { ...repo, watchers_count: repo.watchers_count + 1, isWatcher: true } : repo),
        repo: { ...state.repo, watchers_count: state.repo.watchers_count + 1, isWatcher: true }
      };
    case 'DECREMENT_WATCHER':
      return {
        ...state,
        repos: state.repos.map((repo) => repo.id === action.payload ? { ...repo, watchers_count: repo.watchers_count - 1, isWatcher: false } : repo),
        repo: { ...state.repo, watchers_count: state.repo.watchers_count - 1, isWatcher: false },
      };
    case 'SET_REPOS':
      return { ...state, repos: action.payload };
    case 'SET_REPO':
      return { ...state, repo: action.payload };
    case 'SET_REPOS_STAR':
      return {
        ...state,
        reposStar: action.payload,
        repos: state.repos.map(el => {
          const repoStar = action.payload.find((repo) => repo.id === el.id);
          return repoStar ? {
            ...el,
            ...repoStar,
            isStar: true,
          } : {
              ...el,
              isStar: false,
            };
        }),
      };
    case 'SET_REPOS_WATCH':
      return {
        ...state,
        reporsWatch: action.payload,
        repos: state.repos.map(el => {
          const repoWatched = action.payload.find((repo) => repo.id === el.id);
          return repoWatched ? {
            ...el,
            ...repoWatched,
            isWatcher: !repoWatched.private,
          } : {
              ...el,
              isWatcher: false
            }
        }),
      };
    default:
      return state;
  }
};


// eslint-disable-next-line react/prop-types
function RepoContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setRepo = (repo) => (
    dispatch({
      type: 'SET_REPO',
      payload: repo,
    })
  );

  const setRepos = (repos) => (
    dispatch({
      type: 'SET_REPOS',
      payload: repos,
    })
  );

  const setReposStar = (repos) => (
    dispatch({
      type: 'SET_REPOS_STAR',
      payload: repos,
    })
  );

  const setReposWatch = (repos) => (
    dispatch({
      type: 'SET_REPOS_WATCH',
      payload: repos,
    })
  );

  const incrementStar = (repoId) => (
    dispatch({
      type: 'INCREMENT_STAR',
      payload: repoId,
    })
  );

  const decrementStar = (repoId) => (
    dispatch({
      type: 'DECREMENT_STAR',
      payload: repoId,

    })
  );
  const incrementWatcher = (repoId) => (
    dispatch({
      type: 'INCREMENT_WATCHER',
      payload: repoId,

    })
  );

  const decrementWatcher = (repoId) => (
    dispatch({
      type: 'DECREMENT_STAR',
      payload: repoId,
    })
  );

  const value = {
    ...state,
    setRepos,
    incrementStar,
    decrementStar,
    incrementWatcher,
    decrementWatcher,
    setReposStar,
    setReposWatch,
    setRepo
  };

  return (
    <RepoContext.Provider value={value}>
      {children}
    </RepoContext.Provider>
  );
}

const RepoContextConsumer = RepoContext.Consumer;

export { RepoContext, RepoContextProvider, RepoContextConsumer };