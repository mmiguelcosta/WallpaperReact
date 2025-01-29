import { Routes, Route } from 'react-router-dom'
import {
  PageHome, PageLayout, PageImagem,
  PageCadastrar, PageLogin, PageUpload
} from '../pages'
import { ProtectedRoute } from './ProtectedRoute'
export const RouteSoftware = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageHome />} />
        <Route path="/imagem" element={<PageImagem />} />
        <Route path="/cadastrar" element={<PageCadastrar />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/upload" element={<ProtectedRoute />}>
          <Route path="" element={<PageUpload />} />
        </Route>
      </Route>
    </Routes>
  )
}
