
import React from 'react';
import '../index.css';

const Index = () => {
  return (
    <div className="dashboard-container">
      <header>
        <div className="logo-container">
            <div className="logo"></div>
            <h1>ServiceNow</h1>
        </div>
        <div className="header-controls">
            <div className="search-bar">
                <input type="text" placeholder="Pesquisar automações..." />
                <div className="search-icon"></div>
            </div>
            <div className="user-profile">
                <div className="user-avatar">B</div>
                <span>Admin</span>
            </div>
        </div>
      </header>

      <div className="dashboard-layout">
        <nav>
            <ul>
                <li className="active"><span className="nav-icon dashboard-icon"></span>Dashboard</li>
                <li><span className="nav-icon automations-icon"></span>Automações</li>
                <li><span className="nav-icon logs-icon"></span>Logs</li>
                <li><span className="nav-icon settings-icon"></span>Configurações</li>
                <li><span className="nav-icon reports-icon"></span>Relatórios</li>
            </ul>
        </nav>

        <main>
            <section className="welcome-banner">
                <div className="banner-content fade-in">
                    <div className="badge">Dashboard</div>
                    <h2>Gerenciamento de Automações no ServiceNow</h2>
                    <p>Visualize métricas detalhadas sobre automações em operação, status, logs e desempenho geral das execuções. Nosso dashboard fornece insights valiosos para otimizar seus processos automatizados.</p>
                    <div className="banner-cta">
                        <button className="btn-primary">Explorar Automações</button>
                        <button className="btn-secondary">Ver Relatórios</button>
                    </div>
                </div>
                <div className="banner-graphic pulse"></div>
            </section>

            <div className="dashboard-summary slide-in-up">
                <div className="metric-card hover-scale">
                    <span className="metric-icon total-icon"></span>
                    <div className="metric-data">
                        <span className="metric-value">45</span>
                        <span className="metric-label">Total de Automações</span>
                        <div className="metric-desc">Número total de automações configuradas na plataforma</div>
                    </div>
                </div>
                <div className="metric-card hover-scale">
                    <span className="metric-icon active-icon"></span>
                    <div className="metric-data">
                        <span className="metric-value">35</span>
                        <span className="metric-label">Automações Ativas</span>
                        <div className="metric-desc">Automações em perfeito funcionamento e execução regular</div>
                    </div>
                </div>
                <div className="metric-card hover-scale">
                    <span className="metric-icon maintenance-icon"></span>
                    <div className="metric-data">
                        <span className="metric-value">5</span>
                        <span className="metric-label">Em Manutenção</span>
                        <div className="metric-desc">Automações temporariamente desativadas para ajustes</div>
                    </div>
                </div>
                <div className="metric-card hover-scale">
                    <span className="metric-icon error-icon"></span>
                    <div className="metric-data">
                        <span className="metric-value">5</span>
                        <span className="metric-label">Com Erro</span>
                        <div className="metric-desc">Automações que apresentaram falhas recentes</div>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                <div className="dashboard-card card-large fade-in">
                    <div className="card-header">
                        <h3>Visão Geral do Sistema</h3>
                        <div className="card-controls">
                            <span className="refresh-icon"></span>
                            <span className="more-icon"></span>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="section-description">
                            <p>Este gráfico representa a distribuição das automações por status. Os valores são atualizados em tempo real para fornecer uma visão precisa do estado atual do sistema.</p>
                        </div>
                        <div className="chart-container">
                            <div className="donut-chart">
                                <div className="donut-segment donut-segment-active" style={{transform: "rotate(0deg) skew(0deg)"}}></div>
                                <div className="donut-segment donut-segment-maintenance" style={{transform: "rotate(280deg) skew(40deg)"}}></div>
                                <div className="donut-segment donut-segment-error" style={{transform: "rotate(320deg) skew(40deg)"}}></div>
                                <div className="donut-hole">
                                    <div className="donut-hole-text">45</div>
                                    <div className="donut-hole-subtext">Total</div>
                                </div>
                            </div>
                        </div>
                        <div className="chart-legend">
                            <div className="legend-item">
                                <span className="legend-color active"></span>
                                <span className="legend-label">Ativas (35)</span>
                            </div>
                            <div className="legend-item">
                                <span className="legend-color maintenance"></span>
                                <span className="legend-label">Em manutenção (5)</span>
                            </div>
                            <div className="legend-item">
                                <span className="legend-color error"></span>
                                <span className="legend-label">Com erro (5)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card slide-in-up">
                    <div className="card-header">
                        <h3>Execuções Diárias</h3>
                        <div className="card-controls">
                            <span className="refresh-icon"></span>
                            <span className="more-icon"></span>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="section-description">
                            <p>Monitoramento diário do número de execuções por automação. Identifique quais automações são mais ativas no sistema.</p>
                        </div>
                        <div className="chart-container">
                            <div className="bar-chart">
                                <div className="bar-container">
                                    <div className="bar-label">Envio de Relatórios</div>
                                    <div className="bar-wrapper">
                                        <div className="bar" style={{width: "80%"}}>
                                            <span className="bar-value">20</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bar-container">
                                    <div className="bar-label">Coleta de Dados</div>
                                    <div className="bar-wrapper">
                                        <div className="bar" style={{width: "60%"}}>
                                            <span className="bar-value">15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card fade-in">
                    <div className="card-header">
                        <h3>Tempo Médio de Execução</h3>
                        <div className="card-controls">
                            <span className="refresh-icon"></span>
                            <span className="more-icon"></span>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="section-description">
                            <p>Análise da variação do tempo médio de execução das automações ao longo dos últimos 5 dias. Importante para identificar tendências de desempenho.</p>
                        </div>
                        <div className="chart-container">
                            <div className="line-chart">
                                <div className="line-chart-grid">
                                    <div className="line-chart-y-axis">
                                        <span>5m</span>
                                        <span>4m</span>
                                        <span>3m</span>
                                        <span>2m</span>
                                        <span>1m</span>
                                        <span>0</span>
                                    </div>
                                    <div className="line-chart-lines">
                                        <div className="line-chart-line"></div>
                                        <div className="line-chart-line"></div>
                                        <div className="line-chart-line"></div>
                                        <div className="line-chart-line"></div>
                                        <div className="line-chart-line"></div>
                                    </div>
                                    <div className="line-chart-data">
                                        <svg className="line-chart-svg" viewBox="0 0 300 200" preserveAspectRatio="none">
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" style={{stopColor: "var(--primary)", stopOpacity: 0.2}} />
                                                    <stop offset="100%" style={{stopColor: "var(--primary)", stopOpacity: 0}} />
                                                </linearGradient>
                                            </defs>
                                            <path d="M0,100 L60,80 L120,90 L180,60 L240,80 L300,70" fill="none" stroke="var(--primary)" strokeWidth="3" className="line-path" />
                                            <path d="M0,100 L60,80 L120,90 L180,60 L240,80 L300,70 L300,200 L0,200 Z" fill="url(#gradient)" className="area-path" />
                                            <circle cx="0" cy="100" r="5" fill="var(--white)" stroke="var(--primary)" strokeWidth="2" className="data-point" />
                                            <circle cx="60" cy="80" r="5" fill="var(--white)" stroke="var(--primary)" strokeWidth="2" className="data-point" />
                                            <circle cx="120" cy="90" r="5" fill="var(--white)" stroke="var(--primary)" strokeWidth="2" className="data-point" />
                                            <circle cx="180" cy="60" r="5" fill="var(--white)" stroke="var(--primary)" strokeWidth="2" className="data-point" />
                                            <circle cx="240" cy="80" r="5" fill="var(--white)" stroke="var(--primary)" strokeWidth="2" className="data-point" />
                                            <circle cx="300" cy="70" r="5" fill="var(--white)" stroke="var(--primary)" strokeWidth="2" className="data-point" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="line-chart-x-axis">
                                    <span>01/05</span>
                                    <span>02/05</span>
                                    <span>03/05</span>
                                    <span>04/05</span>
                                    <span>05/05</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card card-large slide-in-up">
                    <div className="card-header">
                        <h3>Automações em Destaque</h3>
                        <div className="card-controls">
                            <span className="refresh-icon"></span>
                            <span className="more-icon"></span>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="section-description">
                            <p>Automações mais relevantes no sistema, com detalhes sobre responsáveis, departamentos e métricas de execução.</p>
                        </div>
                        <div className="automation-list">
                            <div className="automation-item">
                                <div className="automation-icon report"></div>
                                <div className="automation-details">
                                    <h4>Envio de Relatórios</h4>
                                    <div className="automation-meta">
                                        <span className="meta-item status-active">Ativa</span>
                                        <span className="meta-item">Financeiro</span>
                                        <span className="meta-item">João Silva</span>
                                    </div>
                                </div>
                                <div className="automation-stats">
                                    <div className="stat-item">
                                        <span className="stat-value">20</span>
                                        <span className="stat-label">Execuções</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-value">3min</span>
                                        <span className="stat-label">Tempo Médio</span>
                                    </div>
                                </div>
                            </div>
                            <div className="automation-item">
                                <div className="automation-icon data"></div>
                                <div className="automation-details">
                                    <h4>Coleta de Dados</h4>
                                    <div className="automation-meta">
                                        <span className="meta-item status-maintenance">Manutenção</span>
                                        <span className="meta-item">RH</span>
                                        <span className="meta-item">Ana Souza</span>
                                    </div>
                                </div>
                                <div className="automation-stats">
                                    <div className="stat-item">
                                        <span className="stat-value">15</span>
                                        <span className="stat-label">Execuções</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-value">4min</span>
                                        <span className="stat-label">Tempo Médio</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card fade-in">
                    <div className="card-header">
                        <h3>Distribuição de Erros</h3>
                        <div className="card-controls">
                            <span className="refresh-icon"></span>
                            <span className="more-icon"></span>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="section-description">
                            <p>Análise dos tipos de erros mais frequentes nas automações. Essa visualização ajuda a priorizar os problemas a serem resolvidos.</p>
                        </div>
                        <div className="chart-container">
                            <div className="pie-chart">
                                <div className="pie">
                                    <div className="pie-segment connection" style={{transform: "rotate(0deg) skew(108deg)"}}></div>
                                    <div className="pie-segment authentication" style={{transform: "rotate(144deg) skew(108deg)"}}></div>
                                    <div className="pie-segment script" style={{transform: "rotate(252deg) skew(108deg)"}}></div>
                                </div>
                            </div>
                            <div className="pie-legend">
                                <div className="legend-item">
                                    <span className="legend-color connection"></span>
                                    <span className="legend-label">Erro de Conexão (40%)</span>
                                </div>
                                <div className="legend-item">
                                    <span className="legend-color authentication"></span>
                                    <span className="legend-label">Erro de Autenticação (30%)</span>
                                </div>
                                <div className="legend-item">
                                    <span className="legend-color script"></span>
                                    <span className="legend-label">Erro de Script (30%)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card slide-in-up">
                    <div className="card-header">
                        <h3>Picos de Execução</h3>
                        <div className="card-controls">
                            <span className="refresh-icon"></span>
                            <span className="more-icon"></span>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="section-description">
                            <p>Horários com maior volume de execuções ao longo do dia. Útil para planejamento de recursos e otimização de desempenho.</p>
                        </div>
                        <div className="chart-container">
                            <div className="heat-chart">
                                <div className="heat-bar-container">
                                    <div className="heat-label">08:00</div>
                                    <div className="heat-bar" style={{height: "33%", backgroundColor: "rgba(0, 83, 159, 0.3)"}}></div>
                                    <div className="heat-value">5</div>
                                </div>
                                <div className="heat-bar-container">
                                    <div className="heat-label">10:00</div>
                                    <div className="heat-bar" style={{height: "80%", backgroundColor: "rgba(0, 83, 159, 0.8)"}}></div>
                                    <div className="heat-value">12</div>
                                </div>
                                <div className="heat-bar-container">
                                    <div className="heat-label">12:00</div>
                                    <div className="heat-bar" style={{height: "53%", backgroundColor: "rgba(0, 83, 159, 0.5)"}}></div>
                                    <div className="heat-value">8</div>
                                </div>
                                <div className="heat-bar-container">
                                    <div className="heat-label">14:00</div>
                                    <div className="heat-bar" style={{height: "100%", backgroundColor: "rgba(0, 83, 159, 1)"}}></div>
                                    <div className="heat-value">15</div>
                                </div>
                                <div className="heat-bar-container">
                                    <div className="heat-label">16:00</div>
                                    <div className="heat-bar" style={{height: "67%", backgroundColor: "rgba(0, 83, 159, 0.6)"}}></div>
                                    <div className="heat-value">10</div>
                                </div>
                                <div className="heat-bar-container">
                                    <div className="heat-label">18:00</div>
                                    <div className="heat-bar" style={{height: "27%", backgroundColor: "rgba(0, 83, 159, 0.25)"}}></div>
                                    <div className="heat-value">4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card fade-in">
                    <div className="card-header">
                        <h3>Desvios Máximos</h3>
                        <div className="card-controls">
                            <span className="refresh-icon"></span>
                            <span className="more-icon"></span>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="section-description">
                            <p>Análise dos desvios máximos de tempo permitidos para cada automação. Importante para definir limiares de alerta.</p>
                        </div>
                        <div className="chart-container">
                            <div className="radar-chart">
                                <div className="radar-axis"></div>
                                <div className="radar-axis" style={{transform: "rotate(72deg)"}}></div>
                                <div className="radar-axis" style={{transform: "rotate(144deg)"}}></div>
                                <div className="radar-axis" style={{transform: "rotate(216deg)"}}></div>
                                <div className="radar-axis" style={{transform: "rotate(288deg)"}}></div>
                                <div className="radar-circle" style={{width: "20%", height: "20%"}}></div>
                                <div className="radar-circle" style={{width: "40%", height: "40%"}}></div>
                                <div className="radar-circle" style={{width: "60%", height: "60%"}}></div>
                                <div className="radar-circle" style={{width: "80%", height: "80%"}}></div>
                                <div className="radar-circle" style={{width: "100%", height: "100%"}}></div>
                                <div className="radar-data">
                                    <div className="radar-point" style={{left: "50%", top: "10%"}}></div>
                                    <div className="radar-point" style={{left: "85%", top: "43%"}}></div>
                                    <div className="radar-point" style={{left: "62%", top: "81%"}}></div>
                                    <div className="radar-point" style={{left: "21%", top: "73%"}}></div>
                                    <div className="radar-point" style={{left: "17%", top: "35%"}}></div>
                                    <div className="radar-area"></div>
                                </div>
                                <div className="radar-labels">
                                    <div className="radar-label" style={{left: "50%", top: "0%"}}>Envio de Relatórios</div>
                                    <div className="radar-label" style={{left: "100%", top: "38%"}}>Coleta de Dados</div>
                                    <div className="radar-label" style={{left: "70%", top: "95%"}}>Processamento</div>
                                    <div className="radar-label" style={{left: "15%", top: "85%"}}>Validação</div>
                                    <div className="radar-label" style={{left: "0%", top: "38%"}}>Notificação</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card slide-in-up">
                    <div className="card-header">
                        <h3>Próximas Ações</h3>
                        <div className="card-controls">
                            <span className="refresh-icon"></span>
                            <span className="more-icon"></span>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="section-description">
                            <p>Calendário de ações programadas para as automações. Permite planejar recursos e monitorar execuções futuras.</p>
                        </div>
                        <div className="scheduled-actions">
                            <div className="scheduled-action">
                                <div className="action-time">
                                    <span className="time">08:00</span>
                                    <span className="date">11/05</span>
                                </div>
                                <div className="action-details">
                                    <h4>Envio de Relatórios</h4>
                                    <span className="action-meta">Execução Agendada</span>
                                </div>
                            </div>
                            <div className="scheduled-action">
                                <div className="action-time">
                                    <span className="time">09:30</span>
                                    <span className="date">11/05</span>
                                </div>
                                <div className="action-details">
                                    <h4>Coleta de Dados</h4>
                                    <span className="action-meta">Manutenção Programada</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card card-large fade-in">
                    <div className="card-header">
                        <h3>Insights e Recomendações</h3>
                        <div className="card-controls">
                            <span className="refresh-icon"></span>
                            <span className="more-icon"></span>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="section-description">
                            <p>Recomendações geradas automaticamente com base na análise dos dados. Ações sugeridas para otimizar o desempenho do sistema.</p>
                        </div>
                        <div className="insights-container">
                            <div className="insight-card">
                                <div className="insight-icon warning"></div>
                                <div className="insight-content">
                                    <h4>Alta Taxa de Erro</h4>
                                    <p>A automação "Coleta de Dados" apresenta taxa de erro acima do normal. Recomenda-se revisão da conexão com APIs externas e validação dos parâmetros de autenticação.</p>
                                </div>
                            </div>
                            <div className="insight-card">
                                <div className="insight-icon success"></div>
                                <div className="insight-content">
                                    <h4>Desempenho Otimizado</h4>
                                    <p>A automação "Envio de Relatórios" mantém execução eficiente e consistente. Recomenda-se utilizar a mesma estrutura e padrões para novas automações similares.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      </div>

      <footer>
        <div className="footer-content">
            <p>&copy; 2023 Dashboard de Automações ServiceNow</p>
            <div className="footer-links">
                <a href="#">Termos</a>
                <a href="#">Privacidade</a>
                <a href="#">Suporte</a>
            </div>
        </div>
      </footer>

      <style jsx>{`
        /* Custom styles for enhanced dashboard */
        .dashboard-container {
          position: relative;
          min-height: 100vh;
          font-family: var(--font-sans);
        }

        .dashboard-layout {
          display: flex;
        }

        /* Animation classes */
        .fade-in {
          animation: fadeIn 0.8s ease-in;
        }

        .slide-in-up {
          animation: slideInUp 0.8s ease-out;
        }

        .pulse {
          animation: pulse 2s infinite;
        }

        .hover-scale:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        /* Enhanced banner */
        .welcome-banner {
          background: linear-gradient(135deg, #00539F 0%, #003366 100%);
          padding: 3rem;
          border-radius: var(--radius-lg);
          margin-bottom: 2rem;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .welcome-banner::before {
          content: "";
          position: absolute;
          top: -50px;
          right: -50px;
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }

        .welcome-banner::after {
          content: "";
          position: absolute;
          bottom: -80px;
          left: 30%;
          width: 200px;
          height: 200px;
          background: rgba(255, 107, 0, 0.2);
          border-radius: 50%;
        }

        .banner-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
        }

        .banner-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .banner-content p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .banner-cta {
          display: flex;
          gap: 1rem;
        }

        .btn-primary {
          background: var(--white);
          color: var(--primary);
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: var(--radius-md);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .btn-secondary {
          background: rgba(255,255,255,0.2);
          color: var(--white);
          border: 1px solid rgba(255,255,255,0.3);
          padding: 0.8rem 1.5rem;
          border-radius: var(--radius-md);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.3);
        }

        /* Enhanced metrics */
        .metric-card {
          padding: 1.8rem;
          border-radius: var(--radius-lg);
          background: linear-gradient(145deg, #ffffff, #f5f5f5);
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .metric-value {
          font-size: 2.2rem;
          margin-bottom: 0.2rem;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        .metric-desc {
          margin-top: 0.5rem;
          font-size: 0.8rem;
          color: var(--gray-600);
          line-height: 1.4;
        }

        /* Section descriptions */
        .section-description {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px dashed var(--gray-200);
        }

        .section-description p {
          color: var(--gray-600);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* Enhanced chart styles */
        .donut-chart {
          position: relative;
          width: 220px;
          height: 220px;
          margin: 0 auto;
          border-radius: 50%;
          background-color: #F5F5F5;
        }

        .donut-segment {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          clip: rect(0px, 220px, 220px, 110px);
        }

        .donut-segment-active {
          background-color: var(--primary);
        }

        .donut-segment-maintenance {
          background-color: var(--secondary);
        }

        .donut-segment-error {
          background-color: var(--error);
        }

        .donut-hole {
          position: absolute;
          width: 66%;
          height: 66%;
          border-radius: 50%;
          background-color: white;
          top: 17%;
          left: 17%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .donut-hole-text {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--gray-800);
        }

        .donut-hole-subtext {
          font-size: 0.9rem;
          color: var(--gray-600);
        }

        /* Bar chart */
        .bar-chart {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .bar-container {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .bar-label {
          width: 120px;
          font-size: 0.9rem;
          color: var(--gray-700);
          text-align: right;
        }

        .bar-wrapper {
          flex: 1;
          height: 24px;
          background-color: var(--gray-100);
          border-radius: 12px;
        }

        .bar {
          height: 100%;
          background: linear-gradient(90deg, var(--primary) 0%, var(--primary-light) 100%);
          border-radius: 12px;
          position: relative;
          animation: growBar 1.5s ease-out;
        }

        @keyframes growBar {
          from { width: 0; }
        }

        .bar-value {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
        }

        /* Line chart */
        .line-chart {
          position: relative;
          width: 100%;
          height: 250px;
        }

        .line-chart-grid {
          position: relative;
          width: 100%;
          height: 200px;
          display: flex;
        }

        .line-chart-y-axis {
          width: 30px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 5px 0;
        }

        .line-chart-y-axis span {
          font-size: 0.7rem;
          color: var(--gray-500);
          transform: translateY(50%);
        }

        .line-chart-lines {
          position: absolute;
          left: 30px;
          right: 0;
          top: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .line-chart-line {
          width: 100%;
          height: 1px;
          background-color: var(--gray-200);
        }

        .line-chart-data {
          position: absolute;
          left: 30px;
          right: 0;
          top: 0;
          bottom: 0;
        }

        .line-chart-svg {
          width: 100%;
          height: 100%;
        }

        .line-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLine 2s forwards ease-out;
        }

        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }

        .area-path {
          opacity: 0;
          animation: fadeIn 0.5s forwards 1.5s;
        }

        .data-point {
          opacity: 0;
          animation: fadeIn 0.3s forwards;
          animation-delay: calc(var(--i, 0) * 0.3s + 1.8s);
        }

        .line-chart-x-axis {
          display: flex;
          justify-content: space-between;
          padding: 10px 0 0 30px;
        }

        .line-chart-x-axis span {
          font-size: 0.8rem;
          color: var(--gray-600);
        }

        /* Pie chart */
        .pie-chart {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .pie {
          position: relative;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background-color: #F5F5F5;
          overflow: hidden;
        }

        .pie-segment {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-origin: 50% 50%;
        }

        .connection {
          background-color: var(--error);
        }

        .authentication {
          background-color: var(--warning);
        }

        .script {
          background-color: var(--success);
        }

        .pie-legend {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          width: 100%;
        }

        /* Heat chart */
        .heat-chart {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 200px;
          padding-top: 30px;
        }

        .heat-bar-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 40px;
        }

        .heat-label {
          font-size: 0.7rem;
          color: var(--gray-600);
          margin-bottom: 8px;
        }

        .heat-bar {
          width: 30px;
          border-radius: 4px 4px 0 0;
          transition: height 1s ease-out;
        }

        .heat-value {
          font-size: 0.8rem;
          font-weight: 500;
          margin-top: 8px;
        }

        /* Radar chart */
        .radar-chart {
          position: relative;
          width: 250px;
          height: 250px;
          margin: 0 auto;
        }

        .radar-axis {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 1px;
          background-color: var(--gray-200);
          transform-origin: left center;
        }

        .radar-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 1px dashed var(--gray-200);
          border-radius: 50%;
        }

        .radar-data {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .radar-point {
          position: absolute;
          width: 8px;
          height: 8px;
          background-color: var(--primary);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 0 2px white, 0 0 0 4px rgba(0, 83, 159, 0.3);
        }

        .radar-area {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 10%, 85% 43%, 62% 81%, 21% 73%, 17% 35%);
          background-color: rgba(0, 83, 159, 0.2);
          border: 1px solid var(--primary);
        }

        .radar-labels {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .radar-label {
          position: absolute;
          transform: translate(-50%, -50%);
          font-size: 0.7rem;
          color: var(--gray-700);
          text-align: center;
          max-width: 80px;
        }

        /* Enhanced scheduled actions */
        .scheduled-action {
          position: relative;
          transition: all 0.3s ease;
          border-left: 3px solid var(--primary);
        }

        .scheduled-action:hover {
          transform: translateX(5px);
        }

        .action-time {
          background: linear-gradient(135deg, var(--primary-light) 0%, rgba(0, 83, 159, 0.05) 100%);
        }

        /* Enhanced insights */
        .insight-card {
          background: linear-gradient(145deg, #ffffff, #f5f5f5);
          border-radius: var(--radius-lg);
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
        }

        .insight-card:first-child {
          border-left-color: var(--secondary);
        }

        .insight-card:last-child {
          border-left-color: var(--primary);
        }

        .insight-card:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .insight-content h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .insight-content p {
          line-height: 1.6;
          color: var(--gray-700);
        }
      `}</style>
    </div>
  );
};

export default Index;
