// This file serves as a central hub for re-exporting pre-typed Redux hooks.
import { useDispatch, useSelector, useStore } from "react-redux";

import type { NewsDispatch, NewsStore, RootState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useNewsDispatch = useDispatch.withTypes<NewsDispatch>();
export const useNewsSelector = useSelector.withTypes<RootState>();
export const useNewsStore = useStore.withTypes<NewsStore>();
