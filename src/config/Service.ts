class AdminService{
    async request<TResponse>(
        url: string,
        config: RequestInit = {}
      ): Promise<TResponse> {

        const response = await fetch(`https://api.punkapi.com/v2/${url}`, config);
        return await response.json();
    }
}

export default new AdminService();